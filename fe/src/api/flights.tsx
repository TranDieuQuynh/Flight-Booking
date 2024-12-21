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

export async function searchFlights(
  src_airport: string | undefined, 
  dest_airport: string | undefined, 
  start_time: string | undefined) {

  console.log(src_airport);
  console.log(dest_airport);
  console.log(start_time);
  const params = {
    src_airport: src_airport,
    dest_airport: dest_airport,
    start_time: start_time
  };

  if (!src_airport) {
    delete params.src_airport;
  }
  if (!dest_airport) {
    delete params.dest_airport;
  }
  if (!start_time) {
    delete params.start_time;
  } 
  if (start_time) {
    params.start_time = start_time.split("T")[0];
  }

  const response = await apiRequest("GET", "flight", "search", params);
  if (response?.status == 200) {
    const flights: Flight[] = await response.json();
    return {message: "Successfully retrieved!", flights: flights};
  }

  return {message: "Failed to fetch flights data!", flights: ([] as any) as Flight[]};
}