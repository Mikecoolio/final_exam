# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

10.times do
    random_days = Random.new.rand(1..30)
    a = Auction.create(
        title: Faker::Commerce.product_name,
        body: Faker::Marketing.buzzwords,
        end_date: Faker::Date.forward("#{random_days}"),
        reserve_price: Faker::Number.between(from: 1, to: 10000)
    )
    if a.valid?
        rand(1..5).times do
            Bid.create(price: Faker::Number.non_zero_digit, auction: a)
        end
    end
end

auctions = Auction.all
bids = Bid.all

puts Cowsay.say("Generated #{auctions.count} auctions", :cow)
puts Cowsay.say("Generated #{bids.count} bids", :dragon)