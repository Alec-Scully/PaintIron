class PbPrivatesController < ApplicationController
   def index
      render json: PbPrivate.all.to_json(pb_private_serializer_options)
   end

   def show
      pbPrivate = PbPrivate.find(params[:id]) 
      render json: pbPrivate.to_json(pb_private_serializer_options) 
   end

   def create 
      pbPrivate = PbPrivate.new(pb_private_serializer_options)
      pbPrivate.save
      render json: pbPrivate.to_json(pb_private_serializer_options)
      end
   end

   def update
      pbPrivate = PbPrivate.find(params[:id])
      pbPrivate.update(pb_private_serializer_options)
      render json: pbPrivate.to_json(pb_private_serializer_options)
   end

   def destroy
      pbPrivate = PbPrivate.find(params[:id])
      pbPrivate.destroy
  end

    private

   def pb_private_serializer_options()
      {
         except: [:created_at, :updated_at]
      }
   end
end
