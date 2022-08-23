class BidsController < ApplicationController
    def create
        @auction = Auction.find params[:auction_id]

        @bid = Bid.new(params.require(:bid).permit(:price))
        @bid.auction = @auction

        if @bid.save!
            redirect_to auction_path(@auction)
        else
            render 'auction_path/show', :status => :unprocessable_entity
        end
    end
end
