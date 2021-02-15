class UserPalette < ApplicationRecord
    serialize :color_swatch, Array

    belongs_to :user
end