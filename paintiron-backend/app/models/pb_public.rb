class PbPublic < ApplicationRecord
    serialize :pixel_board, Array

    belongs_to :user
end