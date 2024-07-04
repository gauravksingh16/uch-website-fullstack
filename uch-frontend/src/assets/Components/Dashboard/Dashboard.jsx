import styles from "./Dashboard.module.css";
import { IoIosNotifications } from "react-icons/io";
import { FaCaretUp,FaCaretDown } from "react-icons/fa";


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
            <div className={`${styles.head} ${styles.positive}`}><FaCaretUp /> 8%</div>
            <div className={styles.caps}>vs Last Month</div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Total Revenue</div>
          <div className={styles.cardValue}>₹1000</div>
          <div className={styles.compareLastMonth}>
            <div className={`${styles.head} ${styles.negative}`}><FaCaretDown /> 3%</div>
            <div className={styles.caps}>vs Last Month</div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Total Users</div>
          <div className={styles.cardValue}>1000</div>
          <div className={styles.compareLastMonth}>
            <div className={`${styles.head} ${styles.positive}`}><FaCaretUp /> 3%</div>
            <div className={styles.caps}>vs Last Month</div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Product Listed</div>
          <div className={styles.cardValue}>100</div>
          <div className={styles.compareLastMonth}>
            <div className={`${styles.head} ${styles.positive}`}><FaCaretUp /> 11%</div>
            <div className={styles.caps}>vs Last Month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
