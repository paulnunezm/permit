class ApplicationController < ActionController::Base
  include Authentication
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

inertia_share flash: -> { flash.to_hash },
    current_user: -> { Current.user&.as_json(only: [ :username, :email_address ], include: { role: { only:  :name } }) }
end
