import Link from 'next/link';
import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export function CurrentTicketsSection() {
  return (
    <div className={styles["tab-content"]}>
      <h3>Số vé hiện tại</h3>
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
            <td>AB123</td>
            <td>Hà Nội - TP. HCM</td>
            <td>12/12/2024</td>
            <td>10:00</td>
            <td>Đã đặt</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}