class DashboardController < ApplicationController
  inertia_share flash: -> { flash.to_hash }

  # GET /dashboards
  def index
    render inertia: "Dashboard/Index", props: {
      sites: Current.user.sites
    }
  end
end
