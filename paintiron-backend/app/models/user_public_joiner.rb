class UserPublicJoiner < ApplicationRecord
    belongs_to :user
    belongs_to :pb_public
end