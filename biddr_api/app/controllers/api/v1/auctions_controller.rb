class Api::V1::AuctionsController < Api::ApplicationController
    before_action :authenticate_user!, only: [:create]
    before_action :find_auction, only: [:show, :update]

    def index
        auctions = Auction.order(created_at: :desc)
        render(json: auctions, each_serializer: AuctionCollectionSerializer)
    end

    def show
        if @auction.present?
            render(json: @auction)
        else
            render(json: { error: "Unable to find auction"})
        end
        
    end

    def create
        auction = Auction.new auction_params
        auction.user = current_user

        auction.save!
        render json: { id: auction.id }
    end

    def update
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

    def find_auction
        @auction = Auction.find(params[:id])
    end

    def auction_params
        params.require(:auction).permit(:title, :body, :end_date, :reserve_price)
    end
end