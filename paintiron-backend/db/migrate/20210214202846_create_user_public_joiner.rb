class CreateUserPublicJoiner < ActiveRecord::Migration[6.1]
  def change
    create_table :user_public_joiners do |t|
      t.integer :user_id
      t.integer :pb_public_id

      t.timestamps
    end
  end
end
