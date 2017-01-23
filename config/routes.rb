Rails.application.routes.draw do
  root 'resume#homepage'
  post "/contact" => 'resume#sendMail'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
