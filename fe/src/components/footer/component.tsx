import styles from "./component.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export function Footer() {
  return (
    <footer id={styles['footer']}>
      <div className={styles["footer-container"]}>
        <div className={`${styles["footer-section"]} ${styles["logo-section"]}`}>
          <img src="img/star.png" alt="QAirline Logo" className={styles["footer-logo"]}/>
          <p>QAirline - Chặng bay hàng đầu</p>
        </div>
    
        <div className={styles["footer-section"]}>
          <h3>Dịch vụ</h3>
          <ul>
            <li><a href="#">Đặt vé</a></li>
            <li><a href="#">Quản lý đặt chỗ</a></li>
            <li><a href="#">Làm thủ tục</a></li>
            <li><a href="#">Thông tin chuyến bay</a></li>
          </ul>
        </div>
    
        <div className={styles["footer-section"]}>
          <h3>Về chúng tôi</h3>
          <ul>
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">Câu hỏi thường gặp</a></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>
        </div>
    
        <div className={styles["footer-section"]}>
          <h3>Kết nối với chúng tôi</h3>
          <ul className={styles["social-links"]}>
            <li><a href="https://facebook.com" className="social-icon bi bi-facebook" 
              target="_blank" title="Facebook"></a></li>
            <li><a href="https://instagram.com" className="social-icon bi bi-instagram" 
              target="_blank" title="Instagram"></a></li>
            <li><a href="https://youtube.com" className="social-icon bi bi-youtube" 
              target="_blank" title="YouTube"></a></li>
            <li><a href="https://twitter.com" className="social-icon bi bi-twitter" 
              target="_blank" title="Twitter"></a></li>
          </ul>
        </div>
      </div>
    
      <div className={styles["footer-bottom"]}>
        <p>&copy; 2024 QAirline. All rights reserved.</p>
      </div>
    </footer>
  )
}