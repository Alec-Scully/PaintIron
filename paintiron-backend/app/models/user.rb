class User < ApplicationRecord
    has_secure_password
    validates :username, :email, uniqueness: { case_sensitive: false }

    has_many :user_public_joiners
    has_many :pb_publics, through: :user_public_joiners
    has_many :pb_privates
    has_one :user_palette
end