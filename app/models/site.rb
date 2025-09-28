class Site < ApplicationRecord
  belongs_to :user
  has_many :users
  has_many :permissions

  has_many :permissions_created_today, -> { where(created_at: Time.zone.today.all_day) }, class_name: "Permission"
end
