import Link from "next/link";
import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Login() {
  return (
    <form>
      <div className={styles["input-group"]}>
        <input type="email" id="email" name="email" placeholder="Email" required/>
      </div>
      <div className={styles["input-group"]}>
        <input type="password" id="password" name="password" placeholder="Mật khẩu" required/>
      </div>

      <button className={styles["login-btn"]}>
      <i className="fas fa-sign-in-alt"></i> Đăng nhập</button>

      <div className={styles["links"]}>
          <Link href="/forgot-password">Quên mật khẩu?</Link>
          <Link href="/register">Đăng ký</Link>
      </div>
    </form>
  )
}

export function LoginForm() {
  return (
    <section id={styles["login-section"]}>

      <div className={styles["airplane-animation"]}>
        <img src="img/logo_plane_home.png" alt="Airplane" className={styles["airplane"]}/>
      </div>

      <div className={styles["login-background"]}></div>

      <div className={styles["login-container"]}>
        <div className={styles["login-header"]}>
          <img src="img/logo_tachnen.png" alt="Logo" className={styles["form-logo"]} style={{height: "100px"}}/>
          <h2>Đăng Nhập</h2>
        </div>

        <Login></Login>
      </div>
    </section>
  )
}