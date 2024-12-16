import Link from 'next/link';
import styles from "./component.module.css";
import 'font-awesome/css/font-awesome.min.css';

export function Slogan() {
  return (
    <section className={styles["qairline-journey"]}>
      <div className={styles["qairline-header"]}>
        <h2 className={styles["gradient-text"]}>QAirline - Hành trình của tương lai</h2>
        <img src="/img/plane_tachnen.png" alt="Máy bay đang bay" className={styles["airplane-image"]}/>
      </div>

      <div className={styles["info-columns"]}>
        <div className={`${styles["column"]} ${styles["gradient-text"]}`}>
          240+ đường bay nội địa
        </div>
        <div className={`${styles["column"]} ${styles["gradient-text"]}`}>
          400+ chuyến bay mỗi ngày
        </div>
        <div className={`${styles["column"]} ${styles["gradient-text"]}`}>
          8000+ Nhân viên thân thiện, tận tình
        </div>
        <div className={`${styles["column"]} ${styles["gradient-text"]}`}>
          200+ Tàu bay mới hiện đại, bảo vệ môi trường
        </div>
        <div className={`${styles["column"]} ${styles["gradient-text"]}`}>
          <div className={styles["stars"]}>⭐⭐⭐⭐⭐
            <p style={ {fontSize: "16px"}}>
              Xếp hạng hàng không an toàn cao nhất thế giới
            </p>
          </div>
        </div>
      </div>

      <div className={styles["qairline-summary"]}>
        <p className={styles["gradient-text"]}>
          Cùng QAirLine trải nghiệm chuyến hành trình xanh!
        </p>
      </div>
    </section>
  )
}