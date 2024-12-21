import Link from "next/link";
import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { redirect } from "next/navigation";

export function AdminLoginForm() {
  function login() {
    redirect("/admin/admin-panel/dashboard");
  }

  return (
    
      <div className={styles["login-container"]}>
        <div className={styles["form-card"]}>
          <h2>Đăng Nhập Admin</h2>
          <div>
              <div className={styles["input-group"]}>
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" required/>
              </div>
              <div className={styles["input-group"]}>
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Mật Khẩu" required/>
              </div>
              <button type="submit" className={styles["login-btn"]} onClick={(e) => login()}>Đăng Nhập</button>
              <div className={styles["extra-options"]}>
                <Link href="/admin/forgot-password" id="forgotPasswordLink">Quên mật khẩu?</Link>
              </div>
          </div>
        </div>
      </div>
  )
}