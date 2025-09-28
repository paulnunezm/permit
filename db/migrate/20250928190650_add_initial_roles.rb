class AddInitialRoles < ActiveRecord::Migration[8.0]
  def up
    Role.create(name: 'owner')
    Role.create(name: 'member')
    Role.create(name: 'supervisor')
    Role.create(name: 'admin')
  end

  def down
    Role.where(name: [ 'owner', 'member', 'supervisor', 'admin' ]).delete_all
  end
end
