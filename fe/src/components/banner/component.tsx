import styles from "./component.module.css";

export function Banner() {
  return (
    <section className={styles['banner']}>
      <video autoPlay loop muted className="background-video">
        <source src="/mp4/banner_home.mp4" type="video/mp4"/>
      </video>
    
      <div className={styles['airplane-logo']}>
        <img src="/img/logo_plane_home.png" alt="Airplane Logo"/>
      </div>
    </section>
  )
}