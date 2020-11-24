Rails.application.routes.draw do

  resources :message
  resources :room


  root to: "application#index"
end
