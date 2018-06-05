class Api::SessionsController < ApplicationController
  def login
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      render 
    else
      # send an error
    end
  end
end