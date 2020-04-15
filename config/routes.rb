Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get '/blog/index'
      post '/blog/create', to: 'blog#create'
      get '/show/:id', to: 'blog#show'
      delete '/destroy/:id', to: 'blog#destroy'
    end
  end
  root 'about#index'
  get '/*path' => 'about#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
