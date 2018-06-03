class Product < ApplicationRecord
  has_many :user_products
  has_many :users, through: :user_products
  has_many :product_tags
  has_many :tags, through: :product_tags
end
