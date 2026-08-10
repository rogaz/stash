class CreateSnippets < ActiveRecord::Migration[8.1]
  def change
    create_table :snippets do |t|
      t.string :title, null: false, default: ""
      t.text :content, null: false, default: ""
      t.string :language
      t.text :description
      t.integer :snippet_type
      t.boolean :favorite, null: false, default: false

      t.timestamps
    end

    add_index :snippets, :title, unique: true
  end
end
