class Site < ApplicationRecord
  belongs_to :user
  has_many :users
  has_many :permissions

  # scoped queries
  has_many :permissions_created_today, -> {
    where(created_at: Time.zone.today.all_day).order(created_at: :desc)
  }, class_name: "Permission"

  has_many :older_permissions, -> {
    where("created_at < ?", Time.zone.today).order(created_at: :desc)
  }, class_name: "Permission"

  validates :name, presence: true
  validates :user_id, presence: true
end
