import Link from 'next/link';
import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export function ProfileHeader() {
  return (
    <header className={styles["qairline-header"]}>
        <video className={styles["background-video"]} autoPlay muted loop>
            <source src="/mp4/video2.mp4" type="video/mp4"/>
            Trình duyệt không hỗ trợ video.
        </video>
        <div className={styles["header-overlay"]}>
            <div className={styles["header-content"]}>
                <img src="/img/logo_tachnen.png" alt="QAirline Logo" className={styles["logo"]}/>
                <h1 className={styles["brand-title"]}>QAirline</h1>
                <p className={styles["tagline"]}>Quản lý thông tin hành trình của bạn</p>
            </div>
        </div>
    </header>
  )
}