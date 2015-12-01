Rails.application.routes.draw do
  devise_for :users
  resources :posts
  resources :doughnuts

  get 'welcome/index'
  get 'welcome/about'
  get 'welcome/order'
  get 'welcome/contact'
  root 'welcome#index'

  post '/mail', to: 'welcome#mail'
end
