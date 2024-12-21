import styles from "./component.module.css";

function ResultCard(props: any) {
  return (
    <div className={styles["result-card"]} id="result-card">
      <h3>Thông Tin Vé Của Bạn</h3>
      <p><strong>Mã đặt vé:</strong> <span id="result-code">7cc38</span></p>
      <p><strong>Hành khách:</strong> <span id="result-passenger">aaa</span></p>
      <p><strong>Ngày bay:</strong> <span id="result-date">15/12/2024</span></p>
      <p><strong>Giá vé:</strong> <span id="result-price">1,500,000 VND</span></p>
      <button className={styles["button"]}>Hủy Vé</button>
    </div>
  )
}

export function BookingSection() {
  return (
    <section className={styles["cancel-section"]}>
      <div className={styles["cancel-content"]}>
        <div className={styles["cancel-form"]}>
          <img src="/img/logo_tachnen.png" className={styles["logo"]}/>
          <h2 className={styles["header2"]}>Hủy Vé Máy Bay</h2>

          <input 
            type="text"
            className={styles["input-text"]} 
            placeholder="Nhập mã đặt vé"/>
          <button className={styles["button"]}>Tìm vé</button>
        </div>

        <ResultCard></ResultCard>
      </div>
    </section>
  )
}