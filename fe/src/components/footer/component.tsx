import Link from "next/link";
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
            <li><Link href="#">Đặt vé</Link></li>
            <li><Link href="#">Quản lý đặt chỗ</Link></li>
            <li><Link href="#">Làm thủ tục</Link></li>
            <li><Link href="#">Thông tin chuyến bay</Link></li>
          </ul>
        </div>
    
        <div className={styles["footer-section"]}>
          <h3>Về chúng tôi</h3>
          <ul>
            <li><Link href="#">Giới thiệu</Link></li>
            <li><Link href="#">Câu hỏi thường gặp</Link></li>
            <li><Link href="#">Liên hệ</Link></li>
          </ul>
        </div>
    
        <div className={styles["footer-section"]}>
          <h3>Kết nối với chúng tôi</h3>
          <ul className={styles["social-links"]}>
            <li><Link href="https://facebook.com" className="social-icon bi bi-facebook" 
              target="_blank" title="Facebook"></Link></li>
            <li><Link href="https://instagram.com" className="social-icon bi bi-instagram" 
              target="_blank" title="Instagram"></Link></li>
            <li><Link href="https://youtube.com" className="social-icon bi bi-youtube" 
              target="_blank" title="YouTube"></Link></li>
            <li><Link href="https://twitter.com" className="social-icon bi bi-twitter" 
              target="_blank" title="Twitter"></Link></li>
          </ul>
        </div>
      </div>
    
      <div className={styles["footer-bottom"]}>
        <p>&copy; 2024 QAirline. All rights reserved.</p>
      </div>
    </footer>
  )
}