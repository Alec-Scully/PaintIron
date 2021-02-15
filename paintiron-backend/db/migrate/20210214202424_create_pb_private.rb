class CreatePbPrivate < ActiveRecord::Migration[6.1]
  def change
    create_table :pb_privates do |t|
      t.string :name
      t.integer :user_id
      t.string :pixel_board, array: true

      t.timestamps
    end
  end
end
