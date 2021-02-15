class PbPrivatesController < ApplicationController
    def index
        render json: PbPrivate.all.to_json(pb_private_serializer_options)
    end

    private

   def pb_private_serializer_options()
      {
         except: [:created_at, :updated_at]
      }
   end
end
