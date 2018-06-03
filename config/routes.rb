Rails.application.routes.draw do
  namespace :api do 
    resources :tags
    resources :products
    resources :users
  end
end
