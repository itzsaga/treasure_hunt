class Api::ProductsController < ApplicationController
  before_action :current_product, only: %i[update show destroy]

  def index
    @products = Product.all
    render json: @products, include: [:tags]
  end

  def latest
    @products = Product.last(10).reverse
    render json: @products
  end

  def create
    @product = Product.new
    if @product.save
      render json: @product
    end
  end

  def update
    if @product.update(product_params)
      render json: @product
    end
  end

  def show
    render json: @product, include: [:tags]
  end

  def destroy
    @product.destroy
    render json: @product.id
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :user_id, item_ids:[])
  end

  def current_product
    @product = Product.find(params[:id])
  end
end
