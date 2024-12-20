import Link from 'next/link';
import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export function PersonalInfoSection() {
  return (
    <div className={styles["tab-content"]}>
      <h3>Cập nhật thông tin cá nhân</h3>
      <div id="update-info-form">
        <div className={styles["form-group"]}>
          <label>Tên:</label>
          <input 
            type="text" 
            value="Nguyễn Văn A"/>
        </div>
        <div className={styles["form-group"]}>
          <label>Email:</label>
          <input 
            type="email"
            value="nguyenvana@example.com"/>
        </div>
        <div className={styles["form-group"]}>
          <label>Số điện thoại:</label>
          <input 
            type="text" 
            value="0123456789"/>
        </div>
        <button type="button" className={styles["update-button"]}>Cập nhật</button>
      </div>
    </div>
  )
}