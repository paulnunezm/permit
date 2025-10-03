class MembersController < ApplicationController
  before_action :check_site_ownership

  # GET /members/new/:site
  def new
    render inertia: "User/New", props: {
      site: Site.find_by(id: params[:site_id])
    }
  end

  # POST /members
  def create
    @user = Member.new(member_params.merge(
      password_digest: BCrypt::Password.create("password")
    ))

    site_id = member_params[:site_id]
    if @user.save
      redirect_to site_path site_id, notice: "Site was successfully created."
    else
      redirect_to site_path site_id, inertia: { errors: @user.errors }
    end
  end

  private
  def check_site_ownership
    # TODO: add site checking
    # params.require(:user).permit(:username, :site_id)
    # if !Current.user.sites.exists?(id: params(:site_id))
    #   redirect_to dashboard_index_path, notice: "You don't access that site"
    # end
  end

  def member_params
    params.require(:member).permit(:username, :site_id)
  end
end
