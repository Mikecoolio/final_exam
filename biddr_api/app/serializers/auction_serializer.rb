class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :created_at, :updated_at, :reserve_price, :end_date

  has_many :bids

  class BidSerializer < ActiveModel::Serializer
    attributes :id, :price, :created_at

  end
end
