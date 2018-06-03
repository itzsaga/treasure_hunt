class ProductsController < ApplicationController
  def index
    @products = Product.all
    render json: @products, include: [:tags]
  end

  def show
    @product = Product.find(params[:id])
    render json: @product, include: [:tags]
  end
end
