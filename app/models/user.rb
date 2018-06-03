class User < ApplicationRecord
  has_secure_password

  has_many :product_users
  has_many :products, through: :product_users
end
