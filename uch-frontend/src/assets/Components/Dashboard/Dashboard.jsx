import styles from "./Dashboard.module.css";
import { IoIosNotifications } from "react-icons/io";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import Search from "../Search/Search";
import { GoPlus } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.Notch}>
        <div className={styles.heading}>Dashboard</div>
        <div className={styles.actionGrp}>
          <IoIosNotifications className={styles.icon} />
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Total Orders</div>
          <div className={styles.cardValue}>100</div>
          <div className={styles.compareLastMonth}>
            <div className={`${styles.head} ${styles.positive}`}>
              <FaCaretUp /> 8%
            </div>
            <div className={styles.caps}>vs Last Month</div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Total Revenue</div>
          <div className={styles.cardValue}>₹1000</div>
          <div className={styles.compareLastMonth}>
            <div className={`${styles.head} ${styles.negative}`}>
              <FaCaretDown /> 3%
            </div>
            <div className={styles.caps}>vs Last Month</div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Total Users</div>
          <div className={styles.cardValue}>1000</div>
          <div className={styles.compareLastMonth}>
            <div className={`${styles.head} ${styles.positive}`}>
              <FaCaretUp /> 3%
            </div>
            <div className={styles.caps}>vs Last Month</div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Product Listed</div>
          <div className={styles.cardValue}>100</div>
          <div className={styles.compareLastMonth}>
            <div className={`${styles.head} ${styles.positive}`}>
              <FaCaretUp /> 11%
            </div>
            <div className={styles.caps}>vs Last Month</div>
          </div>
        </div>
      </div>
      <div className={styles.tables}>
        <div className={styles.userTable}>
          <div className={styles.secNotch}>
            <div className={styles.heading}>Users</div>
            <div className={styles.actionGrp}>
              <Search />
              <MdOutlineFileDownload className={styles.icon} />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
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
            </tbody>
          </table>
        </div>
        <div className={styles.orderTable}>
          <div className={styles.secNotch}>
            <div className={styles.heading}>Orders</div>
            <div className={styles.actionGrp}>
              <Search />
              <GoPlus className={styles.icon}/>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
