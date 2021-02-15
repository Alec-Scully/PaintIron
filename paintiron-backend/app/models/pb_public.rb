class PbPublic < ApplicationRecord
    serialize :pixel_board, Array

    has_many :user_public_joiners
    has_many :users, through: :user_public_joiners
end