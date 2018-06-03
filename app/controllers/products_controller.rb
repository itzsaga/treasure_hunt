class ProductsController < ApplicationController
  def index
    @products = Product.all
    render json: @products, include: [:tags]
  end

  def create
    @product = Product.new
    if @product.save
      render json: @product
    end
  end

  def show
    @product = Product.find(params[:id])
    render json: @product, include: [:tags]
  end
end
