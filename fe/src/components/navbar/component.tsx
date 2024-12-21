import Link from 'next/link';
import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { getCurrentUser } from '@/api/auth';
import { useEffect, useState } from 'react';
import { Customer } from "@/api/customers";

export function NavBar() {
  const [user, setUser] = useState<Customer>();

  async function fetchData() {
    try {
      const currentUser = (await getCurrentUser())["user"];
      setUser(currentUser);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  let userSide;
  if (!user) {
    userSide = (
      <div className={styles["auth-links"]}>
        <Link href="/login" className="login-link">
          Đăng nhập
        </Link> 
        | 
        <Link href="/register" className="register-link">
          Đăng ký
        </Link>
      </div>
    );
  } else {
    function avatarClick() {
      let button = document.getElementById("user-dropdown");
      if (button) {
        button.classList.toggle(styles["active"]);
      }
    }

    userSide = (
      <div className={styles["user"]} onClick={(e) => avatarClick()}>
        <span 
          className={styles["user-name"]} 
          style={{marginLeft: "10px", fontWeight: "bold", color: "#4321ff"}}>{user.username}</span>
        <i className= {`fas fa-user-circle ${styles["user-avatar"]}`} style={{color: "#4321ff"}}></i>

        <div className={styles["user-dropdown"]} id="user-dropdown">
          <a href="/profile">
            <i className="fas fa-info-circle"></i>
            Thông tin của bạn
          </a>
          <a href="/shopping-cart">
            <i className="fas fa-shopping-cart"></i>
            Giỏ hàng
          </a>
          <a href="/cancel-ticket">
            <i className="fas fa-trash"></i>
            Hủy vé
          </a>
        </div>
      </div>
    );
  }

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
          {
            userSide
          }
        </div>

      </nav>
    </header>
  )
}