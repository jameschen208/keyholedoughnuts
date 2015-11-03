class AddAttachmentImageToDoughnuts < ActiveRecord::Migration
  def self.up
    change_table :doughnuts do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :doughnuts, :image
  end
end
