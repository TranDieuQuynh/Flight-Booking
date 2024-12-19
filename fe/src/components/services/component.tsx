import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { getAllServices } from '@/api/services';

function ServiceCard(props: any) {
  return (
    <div className={styles["service-card"]}>
      <img src={props.src} className={styles["service-image"]}/>
      <div className={styles["service-details"]}>
        <h2><i className={props.icon}></i>{props.serviceName}</h2>
        <p style={{color: "white"}}>{props.serviceDescription}</p>
      </div>
    </div>
  )
}

export function ServiceList() {
  const services = getAllServices().slice(-4);
  return (
    <div className={styles["service-container"]}>
      <section className={styles["services"]}>
        {
          services.map((service, key) => 
            (<ServiceCard 
              src={service.src}
              icon={service.icon}
              serviceName={service.name}
              serviceDescription={service.description}
              key={key}
          />))
        }
      </section>
    </div>
  )
}