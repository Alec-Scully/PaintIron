class UserPalettesController < ApplicationController
   def index
      render json: UserPalette.all.to_json(user_palette_serializer_options)
   end

   def show
      userPalette = UserPalette.find(params[:id])
      render json: userPalette.to_json(user_palette_serializer_options) 
   end 

   def create 
      userPalette = UserPalette.new(user_palette_serializer_options)
      userPalette.save
      render json: userPalette.to_json(user_palette_serializer_options)
   end

   def update
      userPalette = UserPalette.find(params[:id])
      userPalette.update(user_palette_serializer_options)
      render json: userPalette.to_json(user_palette_serializer_options)
   end

   def destroy
      userPalette = UserPalette.find(params[:id])
      userPalette.destroy
   end

   private

   def user_palette_serializer_options()
      {
         except: [:created_at, :updated_at]
      }
   end
end
