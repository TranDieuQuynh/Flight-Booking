import requests

url = "http://localhost:3000/"
params = {
  "username": "admin",
  "password": "admin",
  "email": "admin@example.com",
  "phone_number": "1234567890",
  "role": "admin"
}
r = requests.post("http://localhost:3000/users", data = params)
print(r.text)