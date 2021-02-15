class UserPublicJoinersController < ApplicationController
    def index
        render json: UserPublicJoiner.all.to_json(user_public_joiner_serializer_options)
    end

    def show
        user_public_joiner = UserPublicJoiner.find(params[:id])
        # render json: user 
        render json: user_public_joiner.to_json(user_public_joiner_serializer_options) 
    end

    private

   def user_public_joiner_serializer_options()
      {
         except: [:created_at, :updated_at]
      }
   end
end
