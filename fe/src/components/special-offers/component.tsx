import styles from "./component.module.css";
import 'font-awesome/css/font-awesome.min.css';
import { getAllOffersData } from "@/api/offers";

function OfferCard(props: any) {
  return (
    <div className={styles["offer-card"]}>
      <div className={styles["wave"]}>
        <img src={props.src} alt={props.alt} style={{height: "100px"}}/>
      </div>
      <h3>{props.offerTitle}</h3>
      <p>{props.offerDescription}</p>
    </div>
  )
}

export function SpecialOfferList() {
  return (
    <div className={styles["special-offers"]}>
      <h2>Ưu đãi đặc biệt</h2>
      <p>Khám phá các chương trình khuyến mãi và ưu đãi hấp dẫn dành riêng cho bạn.</p>
      <div className={styles["offer-cards"]}>
        <OfferCard
          src="/img/discount.png"
          alt="Khuyến mãi 1"
          offerTitle="Giảm 30% vé quốc tế"
          offerDescription="Bay khắp thế giới với giá vé 
          siêu tiết kiệm, chỉ áp dụng đến hết tháng này!"
        >
        </OfferCard>
        <OfferCard
          src="/img/discount25.png"
          alt="Khuyến mãi 2"
          offerTitle="Ưu đãi nhóm từ 4 người"
          offerDescription="Đặt vé theo nhóm để 
          nhận ngay ưu đãi giảm giá lên đến 25%."
        >
        </OfferCard>
        <OfferCard
          src="/img/VietNam.png"
          alt="Khuyến mãi 3"
          offerTitle="Bay nội địa từ 299,000 VND"
          offerDescription="Tận hưởng những chuyến 
          bay nội địa với mức giá siêu ưu đãi."
        >
        </OfferCard>
      </div>
    </div>
  )
}