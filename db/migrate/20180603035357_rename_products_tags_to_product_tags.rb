class RenameProductsTagsToProductTags < ActiveRecord::Migration[5.2]
  def change
    rename_table :products_tags, :product_tags
  end
end
