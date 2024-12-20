import styles from "./component.module.css";
import { getAllReviews } from "@/api/reviews"

function SearchSection(props: any) {
  return (
    <aside className={styles["sidebar"]}>
      <h2>Bộ Lọc</h2>
      <div className={styles["filter-group"]}>
        <label>Điểm khởi hành:</label>
        <select>
          <option value="all">Tất cả</option>
          <option value="qairlineXS">QAirline XS</option>
          <option value="qairlineS">QAirline S</option>
          <option value="qairlineL">QAirline L</option>
        </select>
      </div>
      <div className={styles["filter-group"]}>
        <label>Điểm đến:</label>
        <select>
          <option value="all">Tất cả</option>
          <option value="qairlineXS">QAirline XS</option>
          <option value="qairlineS">QAirline S</option>
          <option value="qairlineL">QAirline L</option>
        </select>
      </div>
      <div className={styles["filter-group"]}>
        <label>Ngày đi</label>
        <input type="date" id={styles["departure-time"]}/>
      </div>
      <button className={styles["apply-filters"]}>Áp dụng</button>
    </aside>
  )
}

function FlightCard(props: any) {
  return (
    <div className={styles["flight-card"]}>
      <div className={styles["flight-info"]}>
      <h3>QAirLine XS</h3>
        <p>Khởi hành: 09:00 - Hạ cánh: 11:30</p>
        <p>Bay thẳng</p>
      </div>
      <div className={styles["flight-price"]}>
        <p>1,200,000 VND</p>
        <button className={styles["select-flight"]}>Chọn</button>
      </div>
    </div>
  )
}

function ResultSection(props: any) {
  return (
    <section className={styles["flight-results"]}>
      <h2>Kết Quả Tìm Kiếm</h2>
      <div className={styles["sort-options"]}>
        <label>Sắp xếp:</label>
        <select id="sort">
          <option value="price-asc">Giá tăng dần</option>
          <option value="price-desc">Giá giảm dần</option>
          <option value="time-asc">Thời gian sớm nhất</option>
          <option value="time-desc">Thời gian muộn nhất</option>
        </select>
      </div>
      <FlightCard></FlightCard>
    </section>
  )
}

export function FlightSearchSection() {
  return (
    <main className={styles["main-content"]}>
      <div className={styles["container"]}>
        <SearchSection></SearchSection>
        <ResultSection></ResultSection>
      </div>
    </main>
  )
}