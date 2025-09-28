class CreatePermissions < ActiveRecord::Migration[8.0]
  def change
    create_table :permissions do |t|
      t.belongs_to :site
      t.belongs_to :user
      t.string :name

      t.timestamps
    end
  end
end
