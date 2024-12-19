import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { PanelContentHeader } from '@/components/admin/content-header/component';
import { getAllTicketsData } from '@/api/tickets';

function TicketData(props: any) {
  const ticket = props.ticket;
  let status = "";
  switch (ticket["status"]) {
    case "paid": {status = "Đã thanh toán"; break;}
    case "unpaid": {status = "Chưa thanh toán"; break;}
    case "canceled": {status = "Đã hủy"; break;}
  }

  return (
    <tr>
      <td>{ticket.id.slice(0, 5)}</td>
      <td>{ticket.username}</td>
      <td>{ticket.flight_code.slice(0, 5)} - {ticket.departure_city} → {ticket.arrival_city}</td>
      <td className={`${styles["status"]} ${styles[ticket.status]}`}>{status}</td>
      <td>
        <button className={styles["edit-btn"]}><i className="fas fa-edit"></i></button>
        <button className={styles["delete-btn"]}><i className="fas fa-trash"></i></button>
      </td>
    </tr>
  )
}

export function TicketManagement(props: any) {
  const tickets = getAllTicketsData();

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
              tickets.map((ticket, key) => (
                <TicketData ticket={ticket} key={key}></TicketData>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}