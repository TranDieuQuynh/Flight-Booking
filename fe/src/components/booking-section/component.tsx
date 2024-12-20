import styles from "./component.module.css";

function BookingInfo(props: any) {
  return (
    <div className={styles["booking-info"]}>
      <h2>Thông tin đặt vé</h2>
      <img src="img/flight-booking.png" alt="Thông tin chuyến bay" className={styles["info-img"]}/>
      <div>
        <div className={styles["form-group"]}>
          <label className={styles["label"]}>Điểm khởi hành:</label>
          <select className={styles["select"]}>
            <option value="all">Tất cả</option>
            <option value="qairlineXS">QAirline XS</option>
            <option value="qairlineS">QAirline S</option>
            <option value="qairlineL">QAirline L</option>
          </select>
        </div>
        <div className={styles["form-group"]}>
          <label className={styles["label"]}>Điểm đến:</label>
          <select className={styles["select"]}>
            <option value="all">Tất cả</option>
            <option value="qairlineXS">QAirline XS</option>
            <option value="qairlineS">QAirline S</option>
            <option value="qairlineL">QAirline L</option>
          </select>
        </div>
        <div className={styles["form-group"]}>
          <label className={styles["label"]}>Ngày đi:</label>
          <input type="date" className={styles["input-date"]} required/>
        </div>
        <button 
          type="submit" 
          className={`${styles["btn"]} ${styles["submit-button"]}`}>
            Tìm chuyến bay</button>
      </div>
    </div>
  )
}

function ServiceCard(props: any) {
  return (
    <div className={styles["service-item"]}>
      <input type="checkbox"/>
      <label>{props.name}</label>
      <p className="service-description">
        {props.description}
      </p>
    </div>
  )
}

function ExtraServices(props: any) {
  return (
    <div className={styles["extra-services"]}>
      <h2>Dịch vụ bổ trợ</h2>
      <img 
        src="img/travel_insurance.avif" 
        className={styles["service-img"]} 
        style={{color: "#170290"}}
      ></img>
      <ServiceCard
        name="Chọn bữa ăn đặc biệt"
        description="Chọn một bữa ăn phù hợp với khẩu vị hoặc yêu cầu ăn kiêng của bạn. Các tùy chọn có thể bao gồm ăn chay, ăn kiêng gluten, hoặc các bữa ăn đặc biệt cho người có dị ứng thực phẩm."
      ></ServiceCard>
      <ServiceCard
        name="Thêm hành lý ký gửi"
        description="Bạn có thể thêm hành lý ký gửi ngoài số lượng hành lý miễn phí theo quy định. Các gói hành lý có thể có trọng lượng khác nhau tùy theo yêu cầu."
      ></ServiceCard>
      <ServiceCard
        name="Bảo hiểm chuyến bay"
        description="Bảo hiểm chuyến bay giúp bạn bảo vệ tài chính trong trường hợp xảy ra sự cố như hủy chuyến bay, hoãn chuyến hoặc mất hành lý. Đảm bảo chuyến đi của bạn an tâm hơn."
      ></ServiceCard>
    </div>
  )
} 

function Experiences(props: any) {
  return (
    <div className={styles["experience"]}>
      <h2>Trải nghiệm cùng QAirline</h2>
      <img src="img/experience_QA.jpg" className={styles["experience-img"]}/>
      <p className={styles["experience-description"]}>Chọn trải nghiệm hạng ghế: Phổ thông, Thương gia, Hạng nhất</p>

      <div className={styles["experience-radio"]}>
        <p>Chọn hạng ghế của bạn:</p>
        <label>
          <input type="radio" name="seat-class" value="economy"/> Phổ thông
        </label>
        <label>
          <input type="radio" name="seat-class" value="business"/> Thương gia
        </label>
        <label>
          <input type="radio" name="seat-class" value="first-class"/> Hạng nhất
        </label>
      </div>
    </div>
  )
}

function AddOn(props: any) {
  return (
    <div className={styles["add-ons"]}>
      <h2>Sản phẩm bổ trợ</h2>
      <img src="img/add_on.jpg" className={styles["add-on-img"]}/>
      <div className={styles["add-on-item"]}>
          <label>Dịch vụ VIP</label>
          <input type="checkbox"/>
      </div>

      <div className={styles["vip-description"]}>
      <p><strong>Dịch vụ VIP:</strong> Dịch vụ đặc biệt dành cho hành khách yêu cầu sự chăm sóc chu đáo, bao gồm các tiện ích như phòng chờ VIP, dịch vụ đưa đón tận nơi và ưu tiên check-in. Chọn dịch vụ này để có trải nghiệm bay cao cấp hơn.</p>
      </div>
    </div>
  )
}

export function BookingSection() {
  return (
    <section id="booking-section" style={{color: "#170290"}}>
      <div className={styles["booking-container"]}>
        <BookingInfo></BookingInfo>
        <ExtraServices></ExtraServices>
        <Experiences></Experiences>
        <AddOn></AddOn>
      </div>
      <div className={styles["booking-btn-container"]}>
        <button 
          className={styles["booking-btn"]}
        >Đặt vé</button>
      </div>
    </section>
  )
}