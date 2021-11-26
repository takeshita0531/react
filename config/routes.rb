Rails.application.routes.draw do
root to: redirect('/posts')

resources :posts, only: [:new, :index, :show, :edit, :create, :update, :destroy]
resources :modes, only: [:index, :create]

  # root to: "sample#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
