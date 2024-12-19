import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { getAllCustomersData } from '@/api/customers';
import { PanelContentHeader } from '@/components/admin/content-header/component';

function Customer(props: any) {
  const customer = props.customer;
  const index = props.index;

  return (
    <tr>
      <td>{index}</td>
      <td>{customer.username}</td>
      <td>{customer.email}</td>
      <td>{customer.phone_number}</td>
      <td><button className={styles["details-btn"]}>Xem Chi Tiết</button>
      </td>
      <td>
        <button className={styles["edit-btn"]}><i className="fas fa-edit"></i></button>
        <button className={styles["delete-btn"]}><i className="fas fa-trash"></i></button>
      </td>
    </tr>
  )
}

export function CustomerManagement(props: any) {
  const customers = getAllCustomersData();

  return (
    <div className={styles["customer-container"]}>
      <PanelContentHeader name="Quản Lý Khách Hàng"></PanelContentHeader>

      <div className={styles["search-bar"]}>
        <input type="text" placeholder="Tìm kiếm khách hàng..." id="searchInput"/>
        <button className={styles["search-btn"]}><i className="fas fa-search"></i> Tìm Kiếm</button>
      </div>

      <div className={styles["table-container"]}>
        <table className={styles["table"]}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên Khách Hàng</th>
              <th>Email</th>
              <th>Số Điện Thoại</th>
              <th>Lịch Sử Đặt Vé</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {
              customers.map((customer, key) => (
                <Customer customer={customer} index={key}></Customer>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}