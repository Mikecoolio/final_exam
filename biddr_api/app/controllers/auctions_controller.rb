class AuctionsController < ApplicationController
    def new
        @auction = Auction.new
    end

    def create
        @auction = Auction.new auction_params

        if @auction.save
            redirect_to auction_path(@auction), notice: 'Auction was successfully created.'
        else
            render 'new'
        end
    end

    def show
        @auction = Auction.find(params[:id])
    end

    def index
        # @auctions = Auction.all
        @auctions = Auction.order(created_at: :desc)
    end

    def auction_params
        params.require(:auction).permit(:title, :body, :end_date, :reserve_price)
    end
end
