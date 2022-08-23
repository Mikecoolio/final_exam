class Auction < ApplicationRecord
    has_many :bids, dependent: :destroy

    validates :title, presence: true, uniqueness: true
    validates :body, presence: true
    validates :end_date, presence: true
    validates :reserve_price, presence: true
end
