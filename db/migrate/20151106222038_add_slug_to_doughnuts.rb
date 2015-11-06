class AddSlugToDoughnuts < ActiveRecord::Migration
  def change
    add_column :doughnuts, :slug, :string
  end
end
