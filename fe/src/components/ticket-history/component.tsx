import Link from 'next/link';
import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export function TicketHistorySection() {
  return (
    <div className={styles["tab-content"]}>
      <h3>Lịch sử đặt vé</h3>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th>Mã vé</th>
            <th>Hành trình</th>
            <th>Ngày</th>
            <th>Giờ</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>XY456</td>
            <td>Đà Nẵng - Hà Nội</td>
            <td>10/10/2024</td>
            <td>18:00</td>
            <td>Hoàn thành</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}