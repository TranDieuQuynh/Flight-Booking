import Link from "next/link";
import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function ForgotPassword() {
  return (
    <form action="#" method="post">
      <div className={styles["input-group"]}>
        <input type="email" id="email" name="email" placeholder="Email" required/>
      </div>

      <button className={styles["login-btn"]}>
      <i className="fas fa-envelope"></i> Gửi liên kết đặt lại mật khẩu</button>
      <div className={styles["links"]}>
          <Link href="/login">Quay lại đăng nhập</Link>
      </div>
    </form>
  )
}

export function ForgotPasswordForm() {
  return (
    <section id={styles["login-section"]}>

      <div className={styles["airplane-animation"]}>
        <img src="img/logo_plane_home.png" alt="Airplane" className={styles["airplane"]}/>
      </div>

      <div className={styles["login-background"]}></div>

      <div className={styles["login-container"]}>
        <div className={styles["login-header"]}>
          <img src="img/logo_tachnen.png" alt="Logo" className={styles["form-logo"]} style={{height: "100px"}}/>
          <h2>Quên Mật Khẩu</h2>
        </div>

        <ForgotPassword></ForgotPassword>
      </div>
    </section>
  )
}