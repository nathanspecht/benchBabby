class AddColumnBenchSize < ActiveRecord::Migration
  def change
    add_column :benches, :seats, :integer
  end
end
