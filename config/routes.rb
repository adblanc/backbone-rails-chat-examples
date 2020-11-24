Rails.application.routes.draw do

  resources :message


  root to: "application#index"
end
