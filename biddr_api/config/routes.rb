Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root "auctions#index"

  resources :auctions, only: [:index, :show, :create] do
    resources :bids, only: [:create, :destroy]
  end
  # namespace :api, defaults: { format: :json } do
  #   namespace :v1 do

  #   end
  # end

end
