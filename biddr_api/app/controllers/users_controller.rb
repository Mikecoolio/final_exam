class UsersController < ApplicationController
    def new
        @user = User.new
    end

    def create
        @user = User.new(params.require(:user).permit(:first_name, :last_name, :email, :reserve_price, :password, :password_confirmation))

        if @user.save!
            session[:user_id] = @user.id
            redirect_to auctions_path, notice: 'User was successfully created.'
        else
            render :new
        end
    end


end
