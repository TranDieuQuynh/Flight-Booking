import Link from "next/link";
import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export function SideBar() {
  return (
    <div className={styles["sidebar"]}>
      <h2>Quản Lý Vé</h2>
      <ul>
        <li><Link href="/admin/admin-panel/dashboard"><i className="fas fa-chart-line"></i> Dashboard</Link></li>
        <li><Link href="/admin/admin-panel/flight-management"><i className="fas fa-plane"></i> Quản lý Chuyến Bay</Link></li>
        <li><Link href="/admin/admin-panel/ticket-management"><i className="fas fa-ticket-alt"></i> Quản lý Vé</Link></li>
        <li><Link href="/admin/admin-panel/customer-management"><i className="fas fa-users"></i> Quản lý Khách Hàng</Link></li>
        <li><Link href="/admin/admin-panel/report"><i className="fas fa-file-invoice-dollar"></i> Báo Cáo</Link></li>
        <li><Link href="/admin/admin-panel/customer-support"><i className="fas fa-headset"></i> Hỗ Trợ Khách Hàng</Link></li>
        <li><Link href="#"><i className="fas fa-cogs"></i> Cài Đặt</Link></li>
      </ul>
    </div>
  )
}