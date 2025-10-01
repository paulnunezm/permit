class SitesController < ApplicationController
  before_action :set_site, only: %i[ show edit update destroy ]

  # GET /sites
  def index
    @sites = Current.user.sites
    render inertia: "Site/Index", props: {
      sites: @sites.map do |site|
        serialize_site(site)
      end
    }
  end

  # GET /sites/1
  def show
    # this is optional: render inertia: "Site/Show", props: {
    render inertia: "Site/Show", props: {
      site: serialize_site(@site),
      users: @site.users.as_json(only: [ "username" ], include: { role: { only: [ :name ] } }),
      permissions: @site.permissions_created_today.as_json(only: [ :name ], include: { user: { only: [ :username ] } }, methods: [ :created_at_ago ]),
      older_permissions: InertiaRails.optional do
       @site.older_permissions.as_json(only: [ :name ], include: { user: { only: [ :username ] } }, methods: [ :created_at_ago ])
      end
    }
  end

  # GET /sites/new
  def new
    @site = Site.new
    render inertia: "Site/New", props: {
      site: serialize_site(@site)
    }
  end

  # GET /sites/1/edit
  def edit
    render inertia: "Site/Edit", props: {
      site: serialize_site(@site)
    }
  end

  # POST /sites
  def create
    # TODO: needs to get other params from the form if admin
    @site = Current.user.sites.new(site_params)

    if @site.save
      redirect_to @site, notice: "Site was successfully created."
    else
      redirect_to new_site_url, inertia: { errors: @site.errors }
    end
  end

  # PATCH/PUT /sites/1
  def update
    # TODO: add a before action check for anything to check site ownership
    if @site.update(site_params)
      redirect_to @site, notice: "Site was successfully updated."
    else
      redirect_to edit_site_url(@site), inertia: { errors: @site.errors }
    end
  end

  # DELETE /sites/1
  def destroy
    @site.destroy!
    redirect_to sites_url, notice: "Site was successfully destroyed."
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_site
      @site = Site.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def site_params
      admin = Role.find_by_name("admin").id
      if Current.user.role_id == admin
        params.require(:site).permit(:name, :user_id)
      else
        params.require(:site).permit(:name)
      end
    end

    def serialize_site(site)
      site.as_json(only: [
        :id, :name, :user_id
      ])
    end
end
