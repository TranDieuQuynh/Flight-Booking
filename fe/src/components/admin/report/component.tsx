import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { PanelContentHeader } from '@/components/admin/content-header/component';

export function Report(props: any) {
  return (
    <div className={styles["report-container"]}>
      <PanelContentHeader name="Báo Cáo Doanh Thu"></PanelContentHeader>
      <div className={styles["report-summary"]}>
        <div className={styles["summary-card"]}>
          <h3>1,200</h3>
          <p>Tổng Số Vé Bán</p>
        </div>
        <div className={styles["summary-card"]}>
          <h3>50</h3>
          <p>Vé Bị Hủy</p>
        </div>
        <div className={styles["summary-card"]}>
          <h3>350,000,000 VNĐ</h3>
          <p>Tổng Doanh Thu</p>
        </div>
      </div>

      <div className={styles["main-report"]}>
        <div className={styles["chart-container"]}>
          <canvas id="revenueChart"></canvas>
        </div>
        <div className={styles["filter-section"]}>
            <label>Lọc Theo Thời Gian:</label>
            <select id="reportTime">
                <option value="day">Hôm Nay</option>
                <option value="week">Tuần Này</option>
                <option value="month">Tháng Này</option>
                <option value="year">Năm Nay</option>
            </select>
            <button className={styles["filter-btn"]}><i className="fas fa-chart-line"></i> Xem Báo Cáo</button>
        </div>
      </div>

      <div className={styles["export-section"]}>
        <button className={styles["export-btn"]}><i className="fas fa-file-pdf"></i> Xuất PDF</button>
        <button className={styles["export-btn"]}><i className="fas fa-file-excel"></i> Xuất Excel</button>
      </div>

    </div>
  )
}