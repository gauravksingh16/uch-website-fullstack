import { MdOutlineFileDownload } from "react-icons/md";
import Search from "../Search/Search";
import styles from "./Users.module.css";

const Users = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.Notch}>
        <div className={styles.heading}>Orders</div>
        <div className={styles.actionGrp}>
          <Search />
          <MdOutlineFileDownload className={styles.icon} />
        </div>
      </div>
      <div className={styles.listContent}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Joined On</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>U1</td>
              <td>John Doe</td>
              <td>jhondoe@xyz.com</td>
                <td>7970755957</td>
                <td>12/12/2021</td>
            </tr>
            <tr>
              <td>U1</td>
              <td>John Doe</td>
              <td>jhondoe@xyz.com</td>
                <td>7970755957</td>
                <td>12/12/2021</td>
            </tr>
            <tr>
              <td>U1</td>
              <td>John Doe</td>
              <td>jhondoe@xyz.com</td>
                <td>7970755957</td>
                <td>12/12/2021</td>
            </tr>
            <tr>
              <td>U1</td>
              <td>John Doe</td>
              <td>jhondoe@xyz.com</td>
                <td>7970755957</td>
                <td>12/12/2021</td>
            </tr>
            <tr>
              <td>U1</td>
              <td>John Doe</td>
              <td>jhondoe@xyz.com</td>
                <td>7970755957</td>
                <td>12/12/2021</td>
            </tr>
            <tr>
              <td>U1</td>
              <td>John Doe</td>
              <td>jhondoe@xyz.com</td>
                <td>7970755957</td>
                <td>12/12/2021</td>
            </tr>
            <tr>
              <td>U1</td>
              <td>John Doe</td>
              <td>jhondoe@xyz.com</td>
                <td>7970755957</td>
                <td>12/12/2021</td>
            </tr>
            <tr>
              <td>U1</td>
              <td>John Doe</td>
              <td>jhondoe@xyz.com</td>
                <td>7970755957</td>
                <td>12/12/2021</td>
            </tr>
            <tr>
              <td>U1</td>
              <td>John Doe</td>
              <td>jhondoe@xyz.com</td>
                <td>7970755957</td>
                <td>12/12/2021</td>
            </tr>
            <tr>
              <td>U1</td>
              <td>John Doe</td>
              <td>jhondoe@xyz.com</td>
                <td>7970755957</td>
                <td>12/12/2021</td>
            </tr>
            <tr>
              <td>U1</td>
              <td>John Doe</td>
              <td>jhondoe@xyz.com</td>
                <td>7970755957</td>
                <td>12/12/2021</td>
            </tr>
            <tr>
              <td>U1</td>
              <td>John Doe</td>
              <td>jhondoe@xyz.com</td>
                <td>7970755957</td>
                <td>12/12/2021</td>
            </tr>
            <tr>
              <td>U1</td>
              <td>John Doe</td>
              <td>jhondoe@xyz.com</td>
                <td>7970755957</td>
                <td>12/12/2021</td>
            </tr>
            <tr>
              <td>U1</td>
              <td>John Doe</td>
              <td>jhondoe@xyz.com</td>
                <td>7970755957</td>
                <td>12/12/2021</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
