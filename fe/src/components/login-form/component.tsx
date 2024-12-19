import Link from "next/link";
import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import { login } from '@/api/auth';
import { redirect } from "next/navigation";
import Cookies from "js-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signIn() {
    const data = await login(email, password);
    alert(data["message"]);
    if (data["message"] === "Login successful!") {
      console.log(data["user"]);
      const user = data["user"];
      console.log(user);

      if (user?.user_id) {
        Cookies.set("UUID", user.user_id);
      } else {
        console.error("User ID is undefined. Cookie not set.");
      }
      redirect("/home");    
    }
  }

  return (
    <div>
      <div className={styles["input-group"]}>
        <input 
          type="email"  
          name="email" 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required/>
      </div>
      <div className={styles["input-group"]}>
        <input 
          type="password"
          name="password" 
          placeholder="Mật khẩu" 
          value={password}
          onChange={e => setPassword(e.target.value)}
          required/>
      </div>

      <button 
        className={styles["login-btn"]}
        onClick={e => signIn()}
      >
      <i className="fas fa-sign-in-alt"></i> Đăng nhập</button>

      <div className={styles["links"]}>
        <Link href="/forgot-password">Quên mật khẩu?</Link>
        <Link href="/register">Đăng ký</Link>
      </div>
    </div>
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