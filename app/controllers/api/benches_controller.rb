class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:params])
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render :create
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :img_url, :seats)
  end
end
