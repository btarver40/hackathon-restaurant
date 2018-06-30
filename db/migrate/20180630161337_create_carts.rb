class CreateCarts < ActiveRecord::Migration[5.1]
  def change
    create_table :carts do |t|
      t.belongs_to :user, foreign_key: true
      t.string :name
      t.text :description
      t.float :price

      t.timestamps
    end
  end
end
