Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api do
  get 'benches/index', defaults: {format: :json}
  end

  namespace :api do
  post 'benches/create', defaults: {format: :json}
  end

end
