Rails.application.routes.draw do
  get 'carts/index'

  get 'carts/show'

  get 'carts/create'

  get 'carts/destroy'

  get 'items/index'

  get 'items/show'

  get 'items/create'

  get 'items/destroy'

  get 'users/index'

  get 'users/show'

  get 'users/create'

  get 'users/destroy'

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
