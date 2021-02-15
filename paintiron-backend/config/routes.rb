Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post "/login", to: "auth#log_in"

  resources :users
  resources :pb_privates
  resources :pb_publics
  resources :user_palettes
  resources :user_public_joiners

end
