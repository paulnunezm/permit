class Permission < ApplicationRecord
  include ActionView::Helpers::DateHelper

  belongs_to :site
  belongs_to :user

def created_at_ago
    time_ago_in_words(created_at) + " ago"
  end
end
