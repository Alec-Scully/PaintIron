class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true

    has_many :user_public_joiners
    has_many :pb_publics, through: :user_public_joiners
    has_many :pb_privates
    has_one :user_palette
end