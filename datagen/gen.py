import requests

params = { "class_name": "economy", "multiplier": 1}
r = requests.post(
  "http://localhost:3000/ticket-classes/add",
  data = params
)

print(r.text)

r = requests.post(
  "http://localhost:3000/ticket-classes/add",
  data = { "class_name": "business", "multiplier": 3}
)

print(r.text)

r = requests.post(
  "http://localhost:3000/aircrafts/add",
  data = { "model": "Boeing 737", "manufacturer": "Boeing", "seat_capacity": 200}
)

print(r.text)

r = requests.post(
  "http://localhost:3000/aircrafts/add",
  data = { "model": "Airbus A320", "manufacturer": "Airbus", "seat_capacity": 180}
)

print(r.text)

r = requests.post(
  "http://localhost:3000/aircrafts/add",
  data = { "model": "Embraer E190", "manufacturer": "Embraer", "seat_capacity": 110}
)

print(r.text)

r = requests.post(
  "http://localhost:3000/aircrafts/add",
  data = { "model": "Boeing 777", "manufacturer": "Boeing", "seat_capacity": 300}
)

print(r.text)

r = requests.post(
  "http://localhost:3000/aircrafts/add",
  data = { "model": "Airbus A380", "manufacturer": "Airbus", "seat_capacity": 500}
)

print(r.text)