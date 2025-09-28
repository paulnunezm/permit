class CreateUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :users do |t|
      t.string :email_address
      t.string :username
      t.string :password_digest, null: false

      t.references :site, foreign_key: true
      t.references :role, null: false, foreign_key: true

      t.timestamps
    end
    add_index :users, :email_address, unique: true
  end
end
