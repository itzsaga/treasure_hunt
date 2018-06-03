class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render json: @user, include: [:products]
  end
end