import Link from 'next/link';
import styles from "./component.module.css";
import 'font-awesome/css/font-awesome.min.css';

export function NavBar() {
  return (
    <header id={styles['nav-bar-header']}>
      <nav id={styles['nav']}>
        <img 
          src="/img/logo_tachnen.png" 
          alt="QAirline Logo" 
          className={styles.logo} 
          style={{height: "120px"}}
        />
        <ul className={`${styles.menu} ${styles['gradient-text']}`}>
          <li><Link href="/home">TRANG CHỦ</Link></li>
          <li><Link href="/booking">ĐẶT VÉ</Link></li>
          <li><Link href="/services">DỊCH VỤ</Link></li>
          <li><Link href="/flight-search">THÔNG TIN HÀNH TRÌNH</Link></li>
          <li><Link href="/contact">LIÊN HỆ</Link></li>
        </ul>

      <div className={styles['additional-icons']}>
        <div className={styles['top-row']}>
          <button id={styles['button']} className={styles['help-btn']}>
            <i className="fa fa-search"></i> TRỢ GIÚP
          </button>

          <div className={styles['language-selector']}>
            <select>
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
              <option value="cn">中文</option>
            </select>
          </div>
        </div>

          <div className={styles["auth-links"]}>
            <Link href="/login" className="login-link">
              Đăng nhập
            </Link> 
            | 
            <Link href="/register" className="register-link">
              Đăng ký
            </Link>
          </div>
        </div>

      </nav>
    </header>
  )
}