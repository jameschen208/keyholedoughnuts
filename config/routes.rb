Rails.application.routes.draw do
  resources :posts
  resources :doughnuts
  get 'welcome/index'
  root 'welcome#index'
end
