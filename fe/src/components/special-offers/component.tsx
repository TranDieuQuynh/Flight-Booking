import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { getAllOffersData } from "@/api/offers";
import React from "react";

function OfferCard(props: any) {
  return (
    <div className={styles["offer-card"]}>
      <div className={styles["wave"]}>
        <img src={props.src} style={{height: "100px"}}/>
      </div>
      <h3>{props.offerTitle}</h3>
      <p>{props.offerDescription}</p>
    </div>
  )
}

export function SpecialOfferList() {
  const offers = getAllOffersData().slice(-3, undefined);  
  return (
    <div className={styles["special-offers"]}>
      <h2>Ưu đãi đặc biệt</h2>
      <p>Khám phá các chương trình khuyến mãi và ưu đãi hấp dẫn dành riêng cho bạn.</p>
      <div className={styles["offer-cards"]}>
        {
          offers.map((offer, key) => 
            (<OfferCard 
              src={offer.src}
              offerTitle={offer.title}
              offerDescription={offer.description}
              key={key}
          />))
        }
      </div>
    </div>
  )
}