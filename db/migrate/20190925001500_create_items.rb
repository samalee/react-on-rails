class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :todo_name
      t.boolean :complete

      t.timestamps
    end
  end
end
