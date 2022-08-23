class Ability
    include CanCan::Ability

    def initialize(user)
        user ||= User.new
    end

    alias_action :create, :read, :update, :destroy, to: :crud

    can :crud, User do |the_user|
        user == the_user
    end

    can :crud, Auction do |auction|
        user == auction.user
    end

    can :crud, Bid do |bid|
        user == bid.user
    end
end