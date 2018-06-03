class Product < ApplicationRecord
  has_many :product_users
  has_many :users, through: :product_users
  has_many :product_tags
  has_many :tags, through: :product_tags
  accepts_nested_attributes_for :tags
end
