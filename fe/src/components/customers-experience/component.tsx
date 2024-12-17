import styles from "./component.module.css";
import { getAllReviews } from "@/api/reviews"

function TestimonialCard(props: any) {
  return (
    <div className={styles["testimonial-card"]}>
      <img src={props.src} className={styles["customer-image"]}/>
      <p>"{props.review}"</p>
      <h3>- {props.username}</h3>
    </div>
  )
}

export function CustomerExperiences() {
  const reviews = getAllReviews().slice(-2, undefined); 
  return (
    <section className={styles["customer-experiences"]} style={{backgroundColor: "#f5d1ff"}}>
      <h2>Trải nghiệm khách hàng</h2>
      <p>Nghe khách hàng của chúng tôi nói gì về những chuyến bay cùng QAirline.</p>
      <div className={styles["testimonial-cards"]}>
        {
          reviews.map((review, key) => 
            (<TestimonialCard 
              src={review.avatar}
              review={review.review}
              username={review.username}
              key={key}
          />))
        }
      </div>
    </section>
  )
}