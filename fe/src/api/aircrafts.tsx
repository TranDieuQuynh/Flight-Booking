import apiRequest from "./requests";

export interface Aircraft {
  aircraft_id: string;
  aircraft_name: string;
}

export async function getAllAircrafts() {
  const response = await apiRequest("GET", "aircraft", "", "");

  if (response?.status == 200) {
    const aircrafts: Aircraft[] = await response.json();
    return {message: "Successfully retrieved!", aircrafts: aircrafts};
  }

  return {message: "Failed to fetch airports data!", aircrafts: ({} as any) as Aircraft[]};
}