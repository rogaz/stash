class CreateTags < ActiveRecord::Migration[8.1]
  def change
    create_table :tags do |t|
      t.string :name, null: false, default: ""
      t.string :color, null: false, default: "#000000"

      t.timestamps
    end
  end
end
