Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
        origins 'http://127.0.0.1:5500', 'localhost:5500', 'localhost:9999', 'localhost:3434'
        resource(
            "/api/*",
            headers: :any,
            credentials: true,
            methods: [:get, :post, :put, :delete, :patch, :options]
        )
    end
end