Rails.application.routes.draw do

  resources :user
  resources :room_messages
  resources :room


  root to: "application#index"
end
