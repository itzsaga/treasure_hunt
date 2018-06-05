class ApplicationController < ActionController::API
  def encode(user_id)
    payload = {user_id: user_id}
    JWT.encode payload, 'my_secret', 'HS256'
  end

  def decode(token)
    JWT.decode token, 'my_secret', true, { algorithm: 'HS256' }
  end
end
