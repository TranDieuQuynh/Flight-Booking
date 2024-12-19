import { UUID } from "crypto";
import ApiRequest from "./requests";

export interface Customer {
  id: UUID;
  username: string;
  email: string;
  phone_number: string;
  created_time: string;
}

export function getAllCustomersData() {
  const customers: Customer[] = [
    {
      id: "12345-12345-12345-12345-12345",
      username: "Nguyễn Văn A",
      email: "nguyenvana@example.com",
      phone_number: "0123456789",
      created_time: "2024-12-15T08:00:00.000Z"
    },
  ];
  return customers;
}

export function B() {

}