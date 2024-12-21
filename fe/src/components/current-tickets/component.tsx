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
            <th>Khách hàng</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7cc38</td>
            <td>Đà Lạt (DLI) → Đà Nẵng (DAD)</td>
            <td>2024-12-24</td>
            <td>aaa</td>
            <td>Chưa thanh toán</td>
          </tr>
          <tr>
            <td>a65b1</td>
            <td>Đà Lạt (DLI) → Đà Nẵng (DAD)</td>
            <td>2024-12-24</td>
            <td>aaa</td>
            <td>Chưa thanh toán</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}