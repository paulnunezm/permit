class RolesController < ApplicationController
  before_action :set_role, only: %i[ show edit update destroy ]

  inertia_share flash: -> { flash.to_hash }

  # GET /roles
  def index
    @roles = Role.all
    render inertia: "Role/Index", props: {
      roles: @roles.map do |role|
        serialize_role(role)
      end
    }
  end

  # GET /roles/1
  def show
    render inertia: "Role/Show", props: {
      role: serialize_role(@role)
    }
  end

  # GET /roles/new
  def new
    @role = Role.new
    render inertia: "Role/New", props: {
      role: serialize_role(@role)
    }
  end

  # GET /roles/1/edit
  def edit
    render inertia: "Role/Edit", props: {
      role: serialize_role(@role)
    }
  end

  # POST /roles
  def create
    @role = Role.new(role_params)

    if @role.save
      redirect_to @role, notice: "Role was successfully created."
    else
      redirect_to new_role_url, inertia: { errors: @role.errors }
    end
  end

  # PATCH/PUT /roles/1
  def update
    if @role.update(role_params)
      redirect_to @role, notice: "Role was successfully updated."
    else
      redirect_to edit_role_url(@role), inertia: { errors: @role.errors }
    end
  end

  # DELETE /roles/1
  def destroy
    @role.destroy!
    redirect_to roles_url, notice: "Role was successfully destroyed."
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_role
      @role = Role.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def role_params
      params.require(:role).permit(:name)
    end

    def serialize_role(role)
      role.as_json(only: [
        :id, :name
      ])
    end
end
