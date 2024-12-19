import Link from "next/link";
import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import { register } from "@/api/auth";
import { redirect } from "next/navigation";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  async function registerEvent() {
    const req = await register(username, email, password, passwordConfirmation);
    alert(req["message"]);

    if (req["message"] === "Register successful!") {
      redirect("/login");
    }
  }

  return (
    <div>
      <div className={styles["input-group"]}>
        <input 
          type="username" 
          placeholder="Tên tài khoản" 
          value={username}
          onChange={e => setUsername(e.target.value)} 
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <input 
          type="email" 
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)} 
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <input 
          type="password" 
          placeholder="Mật khẩu" 
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <div className={styles["input-group"]}>
        <input 
          type="password" 
          placeholder="Nhập lại mật khẩu" 
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
          required
        />
      </div>

      <button 
        className={styles["login-btn"]} 
        onClick={e => registerEvent()}>Đăng Ký
      </button>

      <div className={styles["form-group"]}>
        <p>Đã có tài khoản? <Link href="/login">Đăng nhập</Link></p>
      </div>
    </div>
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