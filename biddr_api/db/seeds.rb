# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
PASSWORD = "123"

first_user = User.create(
    first_name: "Admin",
    last_name: "User",
    email: "admin@user.com",
    password: PASSWORD
)

10.times do 
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    User.create(
      first_name: first_name,
      last_name: last_name,
      email: "#{first_name}@#{last_name}.com",
      password: PASSWORD
    )
  end
  
users = User.all


10.times do
    random_days = Random.new.rand(1..30)
    a = Auction.create(
        title: Faker::Commerce.product_name,
        body: Faker::Marketing.buzzwords,
        end_date: Faker::Date.forward("#{random_days}"),
        reserve_price: Faker::Number.between(from: 1, to: 10000),
        user: users.sample
    )
    if a.valid?
        rand(1..5).times do
            Bid.create(price: Faker::Number.non_zero_digit, auction: a, user: users.sample)
        end
    end
end

auctions = Auction.all
bids = Bid.all

puts Cowsay.say("Generated #{auctions.count} auctions", :cow)
puts Cowsay.say("Generated #{bids.count} bids", :dragon)
puts Cowsay.say("Generated #{users.count} users", :koala)