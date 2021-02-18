Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users, only: [:create, :index, :show]
  post '/login', to: 'auth#create'
  post '/auto_login', to: 'auth#auto_login'
  get '/logged_in', to: 'application#logged_in?'
  get '/things', to: 'things#index'
  
  resources :pb_privates
  resources :pb_publics
  resources :user_palettes
  resources :user_public_joiners

end
