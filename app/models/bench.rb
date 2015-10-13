# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :text             not null
#  lat         :float            not null
#  lng         :float            not null
#

class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(params)
    bounds = params["bounds"]
    ne_lat = bounds["northEast"]["lat"].to_f
    ne_lng = bounds["northEast"]["lng"].to_f
    sw_lat = bounds["southWest"]["lat"].to_f
    sw_lng = bounds["southWest"]["lng"].to_f
    min = params["minSeats"]
    max = params["maxSeats"]

    Bench.where("lat <= ? AND
                 lat >= ? AND
                 lng <= ? AND
                 lng >= ? AND
                 seats >= ? AND
                 seats <= ?",
                ne_lat, sw_lat, ne_lng, sw_lng, min, max)
  end
end
