class PbPrivatesController < ApplicationController
   skip_before_action :authorized, only: [:index, :destroy]

   def index
      render json: PbPrivate.all.to_json(pb_private_serializer_options)
   end

   def show
      pbPrivate = PbPrivate.find(params[:id]) 
      render json: pbPrivate.to_json(pb_private_serializer_options) 
   end

   def create 
      pbPrivate = PbPrivate.new(board_params)
      # byebug
      pbPrivate.save
      render json: pbPrivate.to_json()
   end

   def update
      pbPrivate = PbPrivate.find(params[:id])
      pbPrivate.update(:pixel_board => params[:pixel_board])
      render json: pbPrivate.to_json()
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

   def board_params
      params.require(:pb_private).permit!
      # params.require(:pb_private).permit(:name, :user_id, { pixel_board: [] })
  end
end