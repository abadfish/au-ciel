class UsersController < ApplicationController

  def index

  end

  def new

  end

  def create
    @user = User.create(user_params)
  end

  private

  def user_params
    params.require(:user).permit(:email, :first_name)
  end

end
