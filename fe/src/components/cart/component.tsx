import Link from "next/link";
import styles from "./component.module.css";
import { useEffect, useState } from "react";
import { Ticket } from "@/api/tickets";
import { setBooking, getBooking, submitBooking } from "@/api/booking";
import { redirect } from "next/navigation";

function CartItem(props: any) {
  const booking = props.booking;
  function removeBooking() {
    const bookings = getBooking();
    const index = props.index;
    bookings.splice(index, 1);
    setBooking(bookings);
    props.setBookings(bookings);
  }

  return (
    <tr>
      <td>
        {
          booking.flight.flight_id.slice(0, 5)
        }
      </td>
      <td>
        <p>
          <strong>{booking.flight.src_airport} - {booking.flight.dest_airport}</strong>
          <br/>
          Ngày bay: {booking.flight.start_time.split("T")[0]}
        </p>
      </td>
      <td>
        {
          booking.customer_name
        }
      </td>
      <td>{booking.total_price} VND</td>
      <td>
        <button 
          className={styles["remove-btn"]}
          onClick={e => removeBooking()}>Xóa
        </button>
      </td>
    </tr>
  )
}

export function CartSection() {
  const [bookings, setBookings] = useState<Ticket[]>([]);

  useEffect(() => {
    setBookings(getBooking());
  }, []);

  function submit() {
    submitBooking();
    redirect("/shopping-cart");
  }

  return (
    <div className={styles["container"]}>
    <div className={styles["cart-content"]} style={{backgroundColor:"#c9b2ff"}}>
      <section className={styles["cart-items"]}>
        <h2 className={styles["gradient-text"]}>Danh Sách Vé</h2>
          <table className={styles["cart-table"]}>
            <thead>
              <tr>
                <th>Mã chuyến bay</th>
                <th>Thông tin vé</th>
                <th>Khách hàng</th>
                <th>Thành tiền</th>
                <th></th>
              </tr>
            </thead>
              <tbody>
                {
                  bookings.map((booking, value) => (
                    <CartItem booking={booking} key={value} index={value} setBookings={setBookings}></CartItem>
                  ))
                }
              </tbody>
          </table>
        </section>
        <section className={styles["user-info"]}>
          <button 
            className={styles["submit-btn"]}
            onClick={(e) => submit()}
          >Thanh Toán</button>
        </section>
      </div>   
    </div>
  )
}
