class Permission < ApplicationRecord
  include ActionView::Helpers::DateHelper

  validates :name, presence: true
  validates :user_id, presence: true
  validates :site_id, presence: true

  belongs_to :site
  belongs_to :user


def created_at_ago
    time_ago_in_words(created_at) + " ago"
  end
end
