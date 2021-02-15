class CreatePbPublic < ActiveRecord::Migration[6.1]
  def change
    create_table :pb_publics do |t|
      t.string :name
      t.string :pixel_board, array: true

      t.timestamps
    end
  end
end
