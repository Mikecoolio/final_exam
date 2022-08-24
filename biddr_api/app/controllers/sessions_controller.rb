class SessionsController < ApplicationController
    def new
    end

    def create
        @user = User.find_by_email params[:email]
        if @user && @user.authenticate(params[:password])
            session[:user_id] = @user.id
            redirect_to auctions_path, notice: 'Logged in successfully'
        else
            render :new, notice: 'Failed to log in'
        end
    end

    def destroy
        session[:user_id] = nil
        redirect_to root_path, notice: "Logged Out Successfully!"
    end
end
