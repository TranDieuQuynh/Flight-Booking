import Link from "next/link";
import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export function ForgotPasswordForm() {
  return (
    <div className={styles["container"]}>
      <div className={styles["login-container"]}>
        <div className={styles["form-card"]}>
          <h2>Quên Mật Khẩu</h2>
          <p>Nhập email của bạn để khôi phục mật khẩu.</p>
          <form>
              <div className={styles["input-group"]}>
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" required/>
              </div>
              <button type="submit" className={styles["login-btn"]}>Gửi Email Khôi Phục</button>
              <div className={styles["extra-options"]}>
                <Link href="/admin/login" id="backToLogin">Quay lại đăng nhập</Link>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}