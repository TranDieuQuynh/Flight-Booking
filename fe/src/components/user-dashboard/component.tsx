import Link from 'next/link';
import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export function ProfileHeader() {
  return (
    <div className={styles["user-dashboard"]}>
      <div class="avatar">
          <img src="/img/user_avatar.png" alt="User Avatar">
          <h2>Nguyễn Văn A</h2>
      </div>

      <div class="tabs">
        <div class="tab active" data-tab="personal-info">Thông tin cá nhân</div>
        <div class="tab" data-tab="current-tickets">Số vé hiện tại</div>
        <div class="tab" data-tab="ticket-history">Lịch sử đặt vé</div>
      </div>

      <div id="personal-info" class="tab-content active">
          <h3>Cập nhật thông tin cá nhân</h3>
          <form id="update-info-form">
              <div class="form-group">
                  <label for="name">Tên:</label>
                  <input type="text" id="name" value="Nguyễn Văn A">
              </div>
              <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="email" id="email" value="nguyenvana@example.com">
              </div>
              <div class="form-group">
                  <label for="phone">Số điện thoại:</label>
                  <input type="text" id="phone" value="0123456789">
              </div>
              <button type="button" class="update-button">Cập nhật</button>
          </form>
      </div>

      <div id="current-tickets" class="tab-content">
          <h3>Số vé hiện tại</h3>
          <table>
              <thead>
                  <tr>
                      <th>Mã vé</th>
                      <th>Hành trình</th>
                      <th>Ngày</th>
                      <th>Giờ</th>
                      <th>Trạng thái</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>AB123</td>
                      <td>Hà Nội - TP. HCM</td>
                      <td>12/12/2024</td>
                      <td>10:00</td>
                      <td>Đã đặt</td>
                  </tr>
              </tbody>
          </table>
      </div>

      <div id="ticket-history" class="tab-content">
        <h3>Lịch sử đặt vé</h3>
        <table>
          <thead>
            <tr>
              <th>Mã vé</th>
              <th>Hành trình</th>
              <th>Ngày</th>
              <th>Giờ</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>XY456</td>
              <td>Đà Nẵng - Hà Nội</td>
              <td>10/10/2024</td>
              <td>18:00</td>
              <td>Hoàn thành</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}