class PbPublicsController < ApplicationController
   def index
      render json: PbPublic.all.to_json(pb_public_serializer_options)
   end

   def show
      pbPublic = PbPublic.find(params[:id]) 
      render json: pbPublic.to_json(pb_public_serializer_options) 
   end

   def create 
      pbPublic = PbPublic.new(pb_public_serializer_options)
      pbPublic.save
      render json: pbPublic.to_json(pb_public_serializer_options)
      end
   end

   def update
      pbPublic = PbPublic.find(params[:id])
      pbPublic.update(pb_public_serializer_options)
      render json: pbPublic.to_json(pb_public_serializer_options)
   end

   def destroy
      pbPublic = PbPublic.find(params[:id])
      pbPublic.destroy
   end

    private

   def pb_public_serializer_options()
      {
         except: [:created_at, :updated_at]
      }
   end
end
