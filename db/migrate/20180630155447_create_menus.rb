class CreateMenus < ActiveRecord::Migration[5.1]
  def change
    create_table :menus do |t|
      t.string :name
      t.text :description
      t.float :price
      t.integer :quantity

      t.timestamps
    end
  end
end
