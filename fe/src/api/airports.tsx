import apiRequest from "./requests";

export interface Airport {
  airport_id: string;
  airport_name: string;
}

export async function getAllAirports() {
  const response = await apiRequest("GET", "airport", "", "");

  if (response?.status == 200) {
    const airports: Airport[] = await response.json();
    return {message: "Successfully retrieved!", airports: airports};
  }

  return {message: "Failed to fetch airports data!", airports: ({} as any) as Airport[]};
}