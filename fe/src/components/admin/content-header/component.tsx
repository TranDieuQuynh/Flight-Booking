import Link from "next/link";
import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { getCurrentAdminUsername } from '@/api/auth';

export function PanelContentHeader(props: any) {
  const username = getCurrentAdminUsername();

  return (
    <header className={styles["header"]}>
      <h1>{props.name}</h1>
      <div className={styles["user-info"]}>
        <span>Xin chào, {username}!</span>
        <i className="fas fa-user-circle"></i>
      </div>
    </header>
  )
}