import styles from "./Statistics.module.css";
import {
  Line,
  Bar,
  Pie,
} from "react-chartjs-2";
import { useEffect, useState } from "react";
import { Chart as ChartJS, registerables } from 'chart.js';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

// Register Chart.js components
ChartJS.register(...registerables);

const Statistics = () => {
  const [activePeriod, setActivePeriod] = useState("Weekly");
  
  const salesData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const revenueData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Revenue",
        data: [1000, 2000, 1500, 3000, 2500, 3500, 4000],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const topProductsData = {
    labels: ["Product A", "Product B", "Product C", "Product D", "Product E"],
    datasets: [
      {
        label: "Top Products",
        data: [200, 150, 300, 100, 250],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const handlePeriodClick = (period) => {
    setActivePeriod(period);
  };

  useEffect(() => {
    return () => {
      // Clean up chart instances when the component unmounts
      Object.keys(ChartJS.instances).forEach(key => {
        if (ChartJS.instances[key]) {
          ChartJS.instances[key].destroy();
        }
      });
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.Notch}>
        <div className={styles.heading}>Statistics</div>
        <div className={styles.actionGrp}>
          <div
            className={activePeriod === "Weekly" ? styles.active : ""}
            onClick={() => handlePeriodClick("Weekly")}
          >
            Weekly
          </div>
          <div
            className={activePeriod === "Monthly" ? styles.active : ""}
            onClick={() => handlePeriodClick("Monthly")}
          >
            Monthly
          </div>
          <div
            className={activePeriod === "Yearly" ? styles.active : ""}
            onClick={() => handlePeriodClick("Yearly")}
          >
            Yearly
          </div>
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
      <div className={styles.chartContainer}>
      <div className={styles.chartSection}>
        <div className={styles.chart}>
            <Bar data={revenueData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
