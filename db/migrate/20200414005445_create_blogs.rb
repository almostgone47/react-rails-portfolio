class CreateBlogs < ActiveRecord::Migration[6.0]
  def change
    create_table :blogs do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.string :image

      t.timestamps
    end
  end
end
