import styles from "./component.module.css";

function AddOnServiceItem(props: any) {
  return (
    <div className={styles["service-item"]}>
      <img src={props.src} alt={props.alt} className={styles["service-img"]}/>
      <h3>{props.header}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export function AddOnServiceList() {
  return (
    <section id={styles["add-on-services"]}>
      <h2>Dịch vụ bổ trợ</h2>
      <div className={styles["service-list"]}>
        <AddOnServiceItem 
          src = "img/luggage.avif"
          alt = "Hành lý xách tay"
          header = "Hành lý xách tay"
          description = "Được phép mang hành lý xách tay với trọng lượng linh hoạt."
        > 
        </AddOnServiceItem>
        <AddOnServiceItem 
          src = "img/airplane seat.webp"
          alt = "Chỗ ngồi ưu tiên"
          header = "Chỗ ngồi ưu tiên"
          description = "Đặt chỗ ngồi ưu tiên gần cửa thoát hiểm."
        > 
        </AddOnServiceItem>
        <AddOnServiceItem 
          src = "img/food.jpeg"
          alt = "Ăn uống"
          header = "Ăn uống"
          description = "Chọn lựa bữa ăn đa dạng và chất lượng."
        > 
        </AddOnServiceItem>
        <AddOnServiceItem 
          src = "img/flight-attendant.webp"
          alt = "Hỗ trợ hành khách"
          header = "Hỗ trợ hành khách"
          description = "Hỗ trợ hành khách đặc biệt trong suốt hành trình bay."
        > 
        </AddOnServiceItem>
      </div>
    </section>
  )
}