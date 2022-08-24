class Api::V1::AuctionsController < Api::ApplicationController
    before_action :authenticate_user, only: [:create]
    before_action :find_auction, only: [:show]

    def index
        auctions = Auction.order(created_at: :desc)
        render(json: auctions, each_serializer: )
    end

    def show
        @auction = Auction.find(params[:id])
        render(json: @auction)
    end

    def create
        auction = Auction.new auction_params
        auction.user = current_user

        auction.save!
        render json: { id: auction.id }
    end

    def update
        auction = Auction.find(params[:id])

        if auction.update(auction_params)
            render json: { id: auction.id }
        else
            render(
                json: { errors: auction.errors.full_messages},
                status: 422
            )
        end
    end

    private

    def auction_params
        params.require(:auction).permit(:title, :body, :end_date, :reserve_price)
    end
end