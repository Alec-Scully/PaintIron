class CreateUserPalette < ActiveRecord::Migration[6.1]
  def change
    create_table :user_palettes do |t|
      t.string :user_id
      t.string :color_swatch, array: true

      t.timestamps
    end
  end
end
