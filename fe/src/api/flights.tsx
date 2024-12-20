import apiRequest from "./requests";

export interface Flight {
  flight_id: string;
  src_airport: string;
  dest_airport: string;
  aircraft_name: string;
  base_price: number;
  status: string;
  start_time: Date;
}


export async function getAllFlights() {
  const response = await apiRequest("GET", "flight", "", "");

  if (response?.status == 200) {
    const flights: Flight[] = await response.json();
    return {message: "Successfully retrieved!", flights: flights};
  }

  return {message: "Failed to fetch airports data!", flights: ({} as any) as Flight[]};
}

export async function addFlights(
  srcAirport: string,
  destAirport: string,
  aircraftName: string,
  basePrice: number,
  status: string,
  startTime: Date) {
  await apiRequest(
    "POST",
    "flight",
    "",
    {
      src_airport: srcAirport,
      dest_airport: destAirport,
      aircraft_name: aircraftName,
      base_price: basePrice,
      status: status,
      start_time: startTime,
    }
  ); 
}

export async function updateFlights(
  flight_id: string, 
  srcAirport: string,
  destAirport: string,
  aircraftName: string,
  basePrice: number,
  status: string,
  startTime: Date) {
  await apiRequest(
    "PUT",
    "flight",
    flight_id,
    {
      src_airport: srcAirport,
      dest_airport: destAirport,
      aircraft_name: aircraftName,
      base_price: basePrice,
      status: status,
      start_time: startTime,
    }
  ); 
}