class AddModeToPost < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :mode, :string
  end
end
