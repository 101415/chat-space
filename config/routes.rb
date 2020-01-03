Rails.application.routes.draw do
<<<<<<< Updated upstream
  devise_for :users
  root 'groups#index'
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create, :edit, :update]
end
=======
 
  devise_for :users
  root "messages#index"
  resources :users, only: [:edit, :update]
end
>>>>>>> Stashed changes
