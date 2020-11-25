Rails.application.routes.draw do

  resources :users
  resources :room_messages
  resources :room


  root to: "application#index"
end
