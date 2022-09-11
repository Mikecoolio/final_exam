class CreateAuctions < ActiveRecord::Migration[7.0]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :body
      t.datetime :end_date
      t.integer :reserve_price

      t.timestamps
    end
  end
end
