import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { PanelContentHeader } from '@/components/admin/content-header/component';

export function FlightManagement(props: any) {
  return (
    <div className={styles["flight-container"]}>
      <PanelContentHeader name="Quản Lý Chuyến Bay"></PanelContentHeader>
      <div className={styles["search-filter"]}>
        <input
          type="text"
          placeholder="Tìm kiếm số hiệu chuyến bay..."
          id="searchInput"
        />
        <select id="filterDestination">
          <option value="">Lọc theo điểm đến</option>
          <option value="Hà Nội">Hà Nội</option>
          <option value="TP.HCM">TP.HCM</option>
          <option value="Đà Nẵng">Đà Nẵng</option>
        </select>
        <button className={styles["filter-btn"]}><i className="fas fa-filter"></i> Lọc</button>
      </div>

      <div className={styles["stats-container"]}>
        <div className={styles["stats-card"]}>
          <i className="fas fa-plane-departure"></i>
          <h3>50</h3>
          <p>Tổng Số Chuyến Bay</p>
        </div>
        <div className={styles["stats-card"]}>
          <i className="fas fa-plane-slash"></i>
          <h3>5</h3>
          <p>Chuyến Bay Bị Hủy</p>
        </div>
        <div className={styles["stats-card"]}>
          <i className="fas fa-clock"></i>
          <h3>10</h3>
          <p>Chuyến Bay Sắp Khởi Hành</p>
        </div>
        <div className={styles["chart-box"]}>
          <h3>Tỷ Lệ Chuyến Bay</h3>
          <canvas id="miniChart"></canvas>
        </div>
      </div>

      <div className={styles["note"]}>
        <h4>Hướng Dẫn Sử Dụng:</h4>
        <p>- Sử dụng thanh tìm kiếm để lọc chuyến bay theo số hiệu.</p>
        <p>
          - Click vào biểu tượng <i className="fas fa-edit"></i> để chỉnh sửa chuyến
          bay.
        </p>
        <p>- Chuyến bay đã hủy không thể chỉnh sửa hoặc khôi phục.</p>
      </div>

      <div className={styles["table-container"]}>
        <table className={styles["table"]}>
          <thead>
            <tr>
              <th>Số hiệu</th>
              <th>Điểm đi</th>
              <th>Điểm đến</th>
              <th>Ngày giờ</th>
              <th>Giá vé</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>VN123</td>
              <td>Hà Nội</td>
              <td>TP.HCM</td>
              <td>2024-07-10 08:00</td>
              <td>1,500,000 VNĐ</td>
              <td>Đang hoạt động</td>
              <td>
                <button className={styles["edit-btn"]}><i className="fas fa-edit"></i></button>
                <button className={styles["delete-btn"]}><i className="fas fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles["note"]}>
        <h4>Lưu ý:</h4>
        <p>- Chỉ các chuyến bay đang hoạt động mới được chỉnh sửa.</p>
        <p>- Chuyến bay đã hủy sẽ không thể khôi phục.</p>
      </div>

      <div className={styles["pagination"]}>
        <button>&laquo; Trước</button>
        <button className={styles["active"]}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>Tiếp &raquo;</button>
      </div>
    </div>
  )
}