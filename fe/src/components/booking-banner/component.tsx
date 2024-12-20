import styles from "./component.module.css";

export function BookingBanner() {
  return (
    <div className={styles["banner-container"]}>
      <div className={styles["banner"]}>
        <img src="/img/banner_booking.png" alt="Banner" className={styles["banner-img"]}/>
      </div>
    </div>
  )
}