class SitesController < ApplicationController
  before_action :set_site, only: %i[ show edit update destroy ]

  inertia_share flash: -> { flash.to_hash }

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
    render inertia: "Site/Show", props: {
      site: serialize_site(@site),
      users: @site.users.as_json(only: [ "username" ], include: { role: { only: [ :name ] } }),
      permissions: @site.permissions.as_json(only: [ :name ], include: { user: { only: [ :username ] } }, methods: [ :created_at_ago ])
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
    @site = Site.new(site_params)

    if @site.save
      redirect_to @site, notice: "Site was successfully created."
    else
      redirect_to new_site_url, inertia: { errors: @site.errors }
    end
  end

  # PATCH/PUT /sites/1
  def update
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
      params.require(:site).permit(:name, :user_id)
    end

    def serialize_site(site)
      site.as_json(only: [
        :id, :name, :user_id
      ])
    end
end
