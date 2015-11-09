Rails.application.routes.draw do
  devise_for :users
  resources :posts
  resources :doughnuts
  get 'welcome/index'
  root 'welcome#index'
end
