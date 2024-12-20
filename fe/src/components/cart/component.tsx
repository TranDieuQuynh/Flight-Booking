import Link from "next/link";
import styles from "./component.module.css";

function CartItem(props: any) {
  return (
    <tr>
      <td>
        1,500,000 VND
      </td>
      <td>
        <p>
          <strong>Hà Nội - TP. Hồ Chí Minh</strong>
          <br/>
          Ngày bay: 12/12/2024
        </p>
      </td>
      <td>
        1,500,000 VND
      </td>
      <td>1,500,000 VND</td>
      <td><button className={styles["remove-btn"]}>Xóa</button></td>
    </tr>
  )
}

export function CartSection() {
  return (
    <div className={styles["container"]}>
    <div className={styles["cart-content"]} style={{backgroundColor:"#c9b2ff"}}>
      <section className={styles["cart-items"]}>
        <h2 className={styles["gradient-text"]}>Danh Sách Vé</h2>
          <table className={styles["cart-table"]}>
            <thead>
              <tr>
                <th>Mã vé</th>
                <th>Thông tin vé</th>
                <th>Khách hàng</th>
                <th>Thành tiền</th>
                <th></th>
              </tr>
            </thead>
              <tbody>
                <CartItem></CartItem>
              </tbody>
          </table>
        </section>
        <section className={styles["user-info"]}>
          <button className={styles["submit-btn"]}>Thanh Toán</button>
        </section>
      </div>   
    </div>
  )
}
