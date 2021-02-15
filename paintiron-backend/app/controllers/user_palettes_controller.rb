class UserPalettesController < ApplicationController
    def index
        render json: UserPalette.all.to_json(user_palette_serializer_options)
    end

    private

   def user_palette_serializer_options()
      {
         except: [:created_at, :updated_at]
      }
   end
end
