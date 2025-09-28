class PermissionsController < ApplicationController
  before_action :set_permission, only: %i[ show edit update destroy ]

  inertia_share flash: -> { flash.to_hash }

  # GET /permissions
  def index
    @permissions = Permission.all
    render inertia: 'Permission/Index', props: {
      permissions: @permissions.map do |permission|
        serialize_permission(permission)
      end
    }
  end

  # GET /permissions/1
  def show
    render inertia: 'Permission/Show', props: {
      permission: serialize_permission(@permission)
    }
  end

  # GET /permissions/new
  def new
    @permission = Permission.new
    render inertia: 'Permission/New', props: {
      permission: serialize_permission(@permission)
    }
  end

  # GET /permissions/1/edit
  def edit
    render inertia: 'Permission/Edit', props: {
      permission: serialize_permission(@permission)
    }
  end

  # POST /permissions
  def create
    @permission = Permission.new(permission_params)

    if @permission.save
      redirect_to @permission, notice: "Permission was successfully created."
    else
      redirect_to new_permission_url, inertia: { errors: @permission.errors }
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
      params.require(:permission).permit(:site_id, :user_id, :name)
    end

    def serialize_permission(permission)
      permission.as_json(only: [
        :id, :site_id, :user_id, :name
      ])
    end
end
