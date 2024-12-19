import Link from "next/link";
import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export function AdminLoginForm() {
  return (
    
      <div className={styles["login-container"]}>
        <div className={styles["form-card"]}>
          <h2>Đăng Nhập Admin</h2>
          <form>
              <div className={styles["input-group"]}>
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" required/>
              </div>
              <div className={styles["input-group"]}>
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Mật Khẩu" required/>
              </div>
              <button type="submit" className={styles["login-btn"]}>Đăng Nhập</button>
              <div className={styles["extra-options"]}>
                <Link href="/admin/forgot-password" id="forgotPasswordLink">Quên mật khẩu?</Link>
              </div>
          </form>
        </div>
      </div>
  )
}