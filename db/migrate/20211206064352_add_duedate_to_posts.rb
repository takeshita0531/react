class AddDuedateToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :duedate, :date
  end
end
