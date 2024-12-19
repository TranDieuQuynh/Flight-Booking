import requests

url = "http://localhost:3000/"
params = {
  "username": "chau",
  "password": "huhuh123",
  "email": "chau@example.com",
}
# r = requests.post("http://localhost:3000/auth/register", data = params)
# print(r.text)

params = {
  "email": "22021105@vnu.edu.vn",
  "password": "Robot@123"
}

r = requests.post("http://localhost:3000/auth/login", data=params)
print(r.headers)
print(r.text)

# admin - admin123
# john - huhuh123