class AddUserRefsToBids < ActiveRecord::Migration[7.0]
  def change
    add_reference :bids, :user, foreign_key: :true
  end
end
