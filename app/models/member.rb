class Member < User
  FIXED_ROLE = "member"
  before_validation :assign_role

  validates :email_address, presence: false

  validates :site_id, presence: true
  validates :role_id, presence: true
  validates :username, presence: true
  validates :password_digest, presence: true

  private
  def assign_role
    role = Role.find_by(name: FIXED_ROLE)
    self.role_id = role.id if role.present?
  end
end
