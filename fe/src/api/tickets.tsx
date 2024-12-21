import { Flight } from "./flights";
import apiRequest from "./requests";

export interface Ticket {
  ticket_id: string;
  flight: Flight;
  customer_id: string;
  customer_name: string;
  total_price: number;
  status: string;
  booking_time: Date;
}

export async function getAllTicketsData() {
  const response = await apiRequest("GET", "tickets", "", "");
  if (response?.status === 200) {
    return {message: "Success!", tickets: await response.json() as Ticket[]}
  }
  return {message: "Error!", tickets: [] as Ticket[]};
}