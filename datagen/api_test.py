import requests

url = "http://localhost:3000/"
params = {
  "username": "john",
  "password": "huhuh123",
  "email": "john@example.com",
  "phone_number": "0324131322"
}
# r = requests.post("http://localhost:3000/auth/register", data = params)

params = {
  "username": "john",
  "password": "huhuh123"
}

r = requests.post("http://localhost:3000/auth/login", data=params)
print(r.headers)

# admin - admin123
# john - huhuh123