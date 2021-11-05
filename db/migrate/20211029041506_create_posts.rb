class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.text :content
      t.boolean :check, default: false, null: false

      t.timestamps
    end
  end
end
