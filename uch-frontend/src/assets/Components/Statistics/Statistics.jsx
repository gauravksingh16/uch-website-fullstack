import styles from "./Statistics.module.css";
import { useState } from "react";

const Statistics = () => {
  const [activePeriod, setActivePeriod] = useState("Weekly");

  const handlePeriodClick = (period) => {
    setActivePeriod(period);
  };
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
    </div>
  );
};

export default Statistics;
