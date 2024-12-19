import Link from "next/link";
import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { PanelContentHeader } from '@/components/admin/content-header/component';

function Card(props: any) {
  return (
    <div className={styles["card"]}>
      <i className={props.icon}></i>
      <h3>{props.value}</h3>
      <p>{props.name}</p>
    </div>
  )
}

export function AdminOverview() {
  return (
    <div className={styles["main-content"]}>
      <PanelContentHeader name="Dashboard Tổng Quan"></PanelContentHeader>
      <div className={styles["cards"]}>
        <Card
          name="Chuyến Bay Hôm Nay"
          value="50"
          icon="fas fa-plane"
        >
        </Card>
        <Card
          name="Vé Đã Bán"
          value="1200"
          icon="fas fa-ticket-alt"
        >
        </Card>
        <Card
          name="Doanh Thu"
          value="500,000,000đ"
          icon="fas fa-dollar-sign"
        >
        </Card>
        <Card
          name="Vé Chưa Thanh Toán"
          value="80"
          icon="fas fa-clock"
        >
        </Card>
      </div>

      <div className={styles["charts"]}>
        <div className={styles["chart-box"]}>
          <canvas id="revenueChart"></canvas>
        </div>
        <div className={styles["chart-box"]}>
          <canvas id="ticketChart"></canvas>
        </div>
      </div>
    </div>
  )
}