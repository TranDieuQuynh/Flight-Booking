import styles from "./component.module.css";
import 'font-awesome/css/font-awesome.min.css';

function ServiceCard(props: any) {
  return (
    <div className={styles["service-card"]}>
      <img src={props.src} alt={props.alt} className={styles["service-image"]}/>
      <div className={styles["service-details"]}>
        <h2><i className={props.icon}></i>{props.serviceName}</h2>
        <p>{props.serviceDescription}</p>
      </div>
    </div>
  )
}

export function ServiceList() {
  return (
    <div className={styles["service-container"]}>
      <section className={styles["services"]}>
        <ServiceCard
          src="/img/book_ticket.png"
          alt="Đặt vé nhanh chóng"
          icon="fas fa-plane"
          serviceName=" Đặt vé nhanh chóng"
          serviceDescription="Đặt vé dễ dàng chỉ trong vài bước. Giao diện thân thiện,
          hỗ trợ nhiều phương thức thanh toán và xử lý nhanh chóng mọi giao dịch."
        >
        </ServiceCard>
        <ServiceCard
          src="/img/baggage.jpg"
          alt="Hành lý linh hoạt"
          icon="fas fa-luggage-cart"
          serviceName=" Hành lý linh hoạt"
          serviceDescription="QAirline mang đến nhiều tùy chọn gói hành lý phù hợp, từ 
          hành lý xách tay cho đến hành lý ký gửi, giúp bạn an tâm hơn trong mỗi chuyến đi."
        >
        </ServiceCard>
        <ServiceCard
          src="/img/customer_service.webp"
          alt="Chăm sóc khách hàng"
          icon="fas fa-concierge-bell"
          serviceName=" Chăm sóc khách hàng"
          serviceDescription="Đội ngũ hỗ trợ chuyên nghiệp của QAirline luôn sẵn sàng 
          phục vụ 24/7, đảm bảo giải quyết nhanh chóng mọi yêu cầu của khách hàng."
        >
        </ServiceCard>
        <ServiceCard
          src="/img/member.jpg"
          alt="Ưu đãi thành viên"
          icon="fas fa-star"
          serviceName=" Ưu đãi thành viên"
          serviceDescription="Tham gia thành viên QAirline để nhận ưu đãi 
          độc quyền, tích điểm đổi thưởng, và tận hưởng các đặc quyền bay."
        >
        </ServiceCard>
      </section>
    </div>
  )
}