import { UUID } from "crypto";
import ApiRequest from "./requests";

export interface Ticket {
  id: UUID;
  flight_code: UUID;
  username: string;
  departure_city: string;
  arrival_city: string;
  status: string;
  created_time: string;
}

export function getAllTicketsData() {
  const tickets: Ticket[] = [
    {
      id: "12345-12345-12345-12345-12345",
      flight_code: "12345-12345-12345-12345-12345",
      username: "Nguyễn Văn A",
      departure_city: "Hà Nội",
      arrival_city: "TP.HCM",
      status: "paid",
      created_time: "2024-12-15T08:00:00.000Z"
    },
    {
      id: "12345-12345-12345-12345-12345",
      flight_code: "12345-12345-12345-12345-12345",
      username: "Nguyễn Văn A",
      departure_city: "Hà Nội",
      arrival_city: "TP.HCM",
      status: "unpaid",
      created_time: "2024-12-15T08:00:00.000Z"
    },
    {
      id: "12345-12345-12345-12345-12345",
      flight_code: "12345-12345-12345-12345-12345",
      username: "Nguyễn Văn A",
      departure_city: "Hà Nội",
      arrival_city: "TP.HCM",
      status: "canceled",
      created_time: "2024-12-15T08:00:00.000Z"
    }
  ];
  return tickets;
}