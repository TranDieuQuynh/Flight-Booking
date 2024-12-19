import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { PanelContentHeader } from '@/components/admin/content-header/component';

export function CustomerSupport(props: any) {
  return (
    <div className={styles["support-container"]}>
      <PanelContentHeader name="Quản Lý Hỗ Trợ Khách Hàng"></PanelContentHeader>

      <div className={styles["support-summary"]}>
          <div className={styles["summary-card"]}>
              <h3>12</h3>
              <p>Yêu Cầu Chưa Xử Lý</p>
          </div>
          <div className={styles["summary-card"]}>
              <h3>30</h3>
              <p>Tổng Số Yêu Cầu</p>
          </div>
      </div>

      <div className={styles["support-filter"]}>
          <input type="text" id="searchTicket" placeholder="Tìm kiếm yêu cầu..."/>
          <select id="statusFilter">
            <option value="all">Tất Cả</option>
            <option value="pending">Đang Xử Lý</option>
            <option value="resolved">Đã Giải Quyết</option>
          </select>
          <button className={styles["filter-btn"]}>Lọc</button>
      </div>

      <table className={styles["support-table"]}>
        <thead>
          <tr>
            <th>Tên Khách Hàng</th>
            <th>Email</th>
            <th>Nội Dung</th>
            <th>Ngày Gửi</th>
            <th>Trạng Thái</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nguyễn Văn A</td>
            <td>nguyenvana@example.com</td>
            <td>Vé bị lỗi khi thanh toán</td>
            <td>2024-06-12</td>
            <td className="status pending">Đang Xử Lý</td>
            <td>
                <button className={styles["resolve-btn"]}>Giải Quyết</button>
            </td>
          </tr>
          <tr>
            <td>Trần Thị B</td>
            <td>tranthib@example.com</td>
            <td>Cần hoàn tiền vé</td>
            <td>2024-06-10</td>
            <td className="status resolved">Đã Giải Quyết</td>
            <td>
              <button className={styles["disabled"]} disabled>Đã Giải Quyết</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}