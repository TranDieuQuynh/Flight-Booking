import requests
from random import randint

airport = [
  "Cần Thơ (VCA)",
  "Đà Lạt (DLI)",
  "Đà Nẵng (DAD)",
  "Hải Phòng (HPH)",
  "Hà Nội (HAN)",
  "Hồ Chí Minh (SGN)",
  "Huế (HUI)",
  "Nha Trang (CXR)",
  "Phú Quốc (PQC)",
  "Hạ Long (VDO)",
  "Vinh (VII)"
]

aircraft = [
  "Demonurge",
  "Hellheat",
  "Wildfire",
  "Azurebullet",
  "Devilstrike",
  "Major Crow",
  "Wise Harrier",
  "Red Bolt",
  "Long Chick",
  "Sharp Eagle"
]

"""
for e in airport:
  params = {"airport_name": e}
  r = requests.post(
    "http://localhost:3000/airport",
    data = params
  )
  print(r.text)
"""
for e in aircraft:
  params = {"aircraft_name": e, "capacity": randint(30, 100)}
  print(params)
  r = requests.post(
    "http://localhost:3000/aircraft",
    json = params
  )
  print(r.text)