class Api::V1::BidsController < Api::ApplicationController
    before_action :authenticate_user!

    def create
        bid = Bid.new params.require(:bid).permit(:price)
        bid.auction = Auction.find params[:auction_id]
        bid.user = current_user

        if bid.save!
            render json: {id: bid.id}
        else
            render(
                json: { errors: bid.errors },
                status: 422
            )
        end
    end
end