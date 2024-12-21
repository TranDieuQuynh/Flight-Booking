import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { PanelContentHeader } from '@/components/admin/content-header/component';
import { getAllTicketsData, Ticket } from '@/api/tickets';
import { useEffect, useState } from "react";

function TicketData(props: any) {
  const ticket = props.ticket;
  console.log(ticket);
  let status = "";
  switch (ticket["status"]) {
    case "paid": {status = "Đã thanh toán"; break;}
    case "unpaid": {status = "Chưa thanh toán"; break;}
    case "canceled": {status = "Đã hủy"; break;}
  }

  return (
    <tr>
      <td>{ticket.ticket_id.slice(0, 5)}</td>
      <td>{ticket.customer_name}</td>
      <td>{ticket.flight.flight_id.slice(0, 5)} - {ticket.flight.src_airport} → {ticket.flight.dest_airport}</td>
      <td className={`${styles["status"]} ${styles[ticket.status]}`}>{status}</td>
      <td>
        <button className={styles["edit-btn"]}><i className="fas fa-edit"></i></button>
        <button className={styles["delete-btn"]}><i className="fas fa-trash"></i></button>
      </td>
    </tr>
  )
}

export function TicketManagement(props: any) {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  async function fetchData() {
    try {
      const response = await getAllTicketsData();
      console.log(response);
      setTickets(response.tickets || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(tickets);

  return (
    <div className={styles["ticket-container"]}>
      <PanelContentHeader name="Quản Lý Vé"></PanelContentHeader>
      <div className={styles["search-filter"]}>
        <input type="text" placeholder="Tìm kiếm mã vé..." id="searchInput" />
        <select id="filterStatus">
          <option value="">Lọc theo trạng thái</option>
          <option value="Đã thanh toán">Đã thanh toán</option>
          <option value="Chưa thanh toán">Chưa thanh toán</option>
          <option value="Đã hủy">Đã hủy</option>
        </select>
        <button className={styles["filter-btn"]}><i className="fas fa-filter"></i> Lọc</button>
      </div>

      <div className={styles["table-container"]}>
        <table className={styles["table"]}>
          <thead>
            <tr>
              <th>Mã Vé</th>
              <th>Khách Hàng</th>
              <th>Chuyến Bay</th>
              <th>Trạng Thái</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {
              tickets?.map((ticket, key) => (
                <TicketData ticket={ticket} key={key}></TicketData>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}