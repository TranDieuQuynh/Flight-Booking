import { Flight } from "./flights";
import apiRequest from "./requests";
import { Ticket } from "./tickets";

export function getFlight(): Flight | null {
  const currentFlight = sessionStorage.getItem("currentFlight");
  if (currentFlight) {
    return JSON.parse(currentFlight) as Flight;
  } else {
    return null;
  }
}

export function setFlight(dataObject: any) {
  sessionStorage.setItem('currentFlight', JSON.stringify(dataObject));
}

export function getBooking(): Ticket[] {
  const booking = sessionStorage.getItem("booking");
  console.log(booking);
  if (booking) {
    return JSON.parse(booking) as Ticket[];
  } else {
    return [] as Ticket[];
  }
}

export function setBooking(dataObject: any) {
  sessionStorage.setItem('booking', JSON.stringify(dataObject));
}

export function submitBooking() {
  const bookings = getBooking();
  if (bookings) {
    for (var i = 0; i < bookings.length; i++) {
      const booking = bookings[i];
      apiRequest("POST", "tickets", "", {
        flight_id: booking.flight.flight_id,
        customer_id: booking.customer_id,
        customer_name: booking.customer_name,
        total_price: booking.total_price,
        status: booking.status,
        booking_time: new Date(),
      });
    }
  }
  alert("Success!");
  sessionStorage.removeItem('booking');
}