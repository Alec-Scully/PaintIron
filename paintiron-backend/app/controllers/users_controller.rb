class UsersController < ApplicationController

    def index
        render json: User.all.to_json(user_serializer_options)
    end

    def show
        user = User.find(params[:id])
        # render json: user 
        render json: user.to_json(user_serializer_options) 
    end

    def create 
        user = User.new(user_serializer_options)
        user.save
        render json: user.to_json(user_serializer_options)
        end
    end

    def update
        user = User.find(params[:id])
        user.update(user_serializer_options)
        render json: user.to_json(user_serializer_options)
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
    end

    private

   def user_serializer_options()
      {
         except: [:created_at, :updated_at]
      }
      
   end
end