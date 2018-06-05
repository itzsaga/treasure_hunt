class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      token = Auth.encode(@user.id)
      render json: { token: token, user: @user }
    else
      # send error
    end
  end

  def show
    @user = User.find(params[:id])
    render json: @user, include: [:products]
  end

  private

  def user_params
    params.require(:user).permit(:name, :password, :email)
  end
end
