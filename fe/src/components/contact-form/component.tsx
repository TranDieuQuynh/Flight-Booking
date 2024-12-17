import styles from "./component.module.css";

export function NavigationImage() {
  return (
    <section className={styles["navigation"]}>
      <img src="/img/banner_contact.png" alt="Hình ảnh navigation" className={styles["navigation-image"]}/>
    </section>
  )
}

export function ContactForm() {
  return (
    <main>
      <section className={styles["contact-section"]}>
        <div className={styles["contact-container"]}>
          <div className={styles["contact-info"]}>
            <h1>Liên hệ với chúng tôi</h1>
            <p>Địa chỉ: 144 Đường Xuân Thủy, Quận Cầu Giấy, Hà Nội</p>
            <p>Email: <a href="mailto:contact@qairline.com">contact@qairline.com</a></p>
            <p>Điện thoại: <a href="tel:+84123456789">+84 123 456 789</a></p>
            <div className={styles["map-container"]}>
              <iframe
                src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.906492708345!2d105.7749183154021!3d21.03576179292664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab5a0a8a5b8b%3A0x6f9c8f9e8f8e8f8e!2zMTQ0IFh1w6JuIFRo4buneSwgQ2F1IEdp4bqleSwgSGFub2kgMTIwMDAw!5e0!3m2!1svi!2s!4v1600000000000!5m2!1svi!2s"
                width = "600"
                height = "450"
                style = {{border:0}}
                allowFullScreen={true}
                loading = "lazy"
                referrerPolicy = "no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          <div className={styles["contact-form-container"]}>
            <h2>Gửi thông điệp cho chúng tôi</h2>
            <form className={styles["contact-form"]}>
              <input type="text" placeholder="Tên của bạn" required/>
              <input type="email" placeholder="Email của bạn" required/>
              <textarea placeholder="Lời nhắn của bạn" rows={5} required></textarea>
              <button type="submit">Gửi</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}