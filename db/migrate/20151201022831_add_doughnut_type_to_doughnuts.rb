class AddDoughnutTypeToDoughnuts < ActiveRecord::Migration
  def change
    add_column :doughnuts, :doughnut_type, :string
  end
end
