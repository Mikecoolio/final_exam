class AuctionColletionSerializer < ActiveModel::Serializer
    attributes(:id, :title, :created_at)
end