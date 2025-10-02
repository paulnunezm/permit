class PermissionsController < ApplicationController
  before_action :set_permission, only: %i[ show edit update destroy ]

  inertia_share flash: -> { flash.to_hash }

  # GET /permissions
  def index
    @permissions = Permission.all
    render inertia: "Permission/Index", props: {
      permissions: @permissions.map do |permission|
        serialize_permission(permission)
      end
    }
  end

  # GET /permissions/1
  def show
    render inertia: "Permission/Show", props: {
      permission: serialize_permission(@permission)
    }
  end

  # GET /permissions/new & /permission/new/:site
  def new
    # TODO: check if the passed site exits and that it belongs to user
    # @permission = Permission.new
    if !Current.user.sites.exists?(id: params.require(:site_id))
      redirect_to dashboard_index_path, notice: "You don't access that site"
    else
      @permission = Permission.new(site_id: params[:site_id])
      render inertia: "Permission/New", props: {
        permission: serialize_permission(@permission)
      }
    end
  end

  # GET /permissions/1/edit
  def edit
    render inertia: "Permission/Edit", props: {
      permission: serialize_permission(@permission)
    }
  end

  # POST /permissions
  def create
    # needs to get other params from the form if admin
    # if not admin
    if Current.user.sites.exists?(id: permission_params[:site_id])
      @permission = Permission.new(permission_params.merge(user_id: Current.user.id))

      if @permission.save
        redirect_to site_path @permission.site_id, notice: "Permission was successfully created."
      else
        redirect_to new_permission_url, inertia: { errors: @permission.errors }
      end
    else
        redirect_to dashboard_index_path, notice: "You can't access that permission"
    end
  end

  # PATCH/PUT /permissions/1
  def update
    if @permission.update(permission_params)
      redirect_to @permission, notice: "Permission was successfully updated."
    else
      redirect_to edit_permission_url(@permission), inertia: { errors: @permission.errors }
    end
  end

  # DELETE /permissions/1
  def destroy
    @permission.destroy!
    redirect_to permissions_url, notice: "Permission was successfully destroyed."
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_permission
      @permission = Permission.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def permission_params
      # TODO: need to allow admin
      params.require(:permission).permit(:name, :site_id)
    end

    def serialize_permission(permission)
      permission.as_json(only: [
        :id, :site_id, :user_id, :name
      ])
    end
end
