import Link from "next/link";
import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Register() {
  return (
    <form>
      <div className={styles["input-group"]}>
        <input type="username" id="username" name="username" placeholder="Tên tài khoản" required/>
      </div>
      <div className={styles["input-group"]}>
        <input type="email" id="email" name="email" placeholder="Email" required/>
      </div>
      <div className={styles["input-group"]}>
        <input type="password" id="password" name="password" placeholder="Mật khẩu" required/>
      </div>
      <div className={styles["input-group"]}>
        <input type="confirm-password" id="confirm-password" name="confirm-password" placeholder="Nhập lại mật khẩu" required/>
      </div>

      <button className={styles["login-btn"]}>Đăng Ký</button>

      <div className={styles["form-group"]}>
        <p>Đã có tài khoản? <Link href="/login">Đăng nhập</Link></p>
      </div>
    </form>
  )
}

export function RegisterForm() {
  return (
    <section id={styles["login-section"]}>

      <div className={styles["airplane-animation"]}>
        <img src="img/logo_plane_home.png" alt="Airplane" className={styles["airplane"]}/>
      </div>

      <div className={styles["login-background"]}></div>

      <div className={styles["login-container"]}>
        <div className={styles["login-header"]}>
          <img src="img/logo_tachnen.png" alt="Logo" className={styles["form-logo"]} style={{height: "100px"}}/>
          <h2>Tạo tài khoản</h2>
        </div>

        <Register></Register>
      </div>
    </section>
  )
}