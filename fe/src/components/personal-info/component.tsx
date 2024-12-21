import Link from 'next/link';
import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '@/api/auth';

export function PersonalInfoSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  async function getUsername() {
    const user = (await getCurrentUser()).user;
    if (user) {
      setName(user.username);
      setEmail(user.email);
      if (user.phone_number) {
        setPhoneNumber(user.phone_number);
      }
    }
  }

  useEffect(() => {
    getUsername();
  }, []);

  return (
    <div className={styles["tab-content"]}>
      <h3>Cập nhật thông tin cá nhân</h3>
      <div id="update-info-form">
        <div className={styles["form-group"]}>
          <label>Tên:</label>
          <input 
            type="text" 
            value={name}
            onChange={e => setName(e.target.value)}
            />
        </div>
        <div className={styles["form-group"]}>
          <label>Email:</label>
          <input 
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className={styles["form-group"]}>
          <label>Số điện thoại:</label>
          <input 
            type="text" 
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}/>
        </div>
        <button type="button" className={styles["update-button"]}>Cập nhật</button>
      </div>
    </div>
  )
}