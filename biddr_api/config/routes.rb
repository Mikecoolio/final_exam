Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root "welcome#new"

  resources :auctions, only: [:index, :show, :create] do
    resources :bids, only: [:create, :destroy]
  end

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      root "welcome#new"
      resources :auctions, only: [:index, :show, :create] do
        resources :bids, only: [:create, :destroy]
      end
      resources :sessions, only: [:create]
      resources :users, only: [:create]
    end
  end

end
