Rails.application.routes.draw do
  namespace :api do 
    get '/products/latest', to: 'products#latest'
    resources :tags, only: :index
    resources :products
    resources :users
    post '/login', to: 'sessions#login'
  end
end
