class RenameProductsUsersToProductUsers < ActiveRecord::Migration[5.2]
  def change
    rename_table :products_users, :product_users
  end
end
