class CreateCarts < ActiveRecord::Migration[5.1]
  def change
    create_table :carts do |t|
      t.belongs_to :user, foreign_key: true
      t.integer :item_count
      t.float :cart_total

      t.timestamps
    end
  end
end
