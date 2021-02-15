class PbPublicsController < ApplicationController
    def index
        render json: PbPublic.all.to_json(pb_public_serializer_options)
    end

    private

   def pb_public_serializer_options()
      {
         except: [:created_at, :updated_at]
      }
   end
end
