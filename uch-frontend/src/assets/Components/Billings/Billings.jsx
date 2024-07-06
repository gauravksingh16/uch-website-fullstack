import Button from "../Button/Button";
import Search from "../Search/Search";
import styles from "./Billings.module.css";

const Billings = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.Notch}>
        <div className={styles.heading}>Billings</div>
        <div className={styles.actionGrp}>
          <Search />
          <Button name={"Add Billing"} />
        </div>
      </div>
      <div className={styles.listContent}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Billing ID</th>
              <th>Name</th>
              <th>Order ID</th>
              <th>Date</th>
              <th>Mode</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>0001</td>
                <td>xyz abc</td>
                <td>0001</td>
                <td>27-01-2002</td>
                <td>Card</td>
                <td>200</td>
                <td>Success</td>
            </tr>
            <tr>
                <td>0001</td>
                <td>xyz abc</td>
                <td>0001</td>
                <td>27-01-2002</td>
                <td>Card</td>
                <td>200</td>
                <td>Success</td>
            </tr>
            <tr>
                <td>0001</td>
                <td>xyz abc</td>
                <td>0001</td>
                <td>27-01-2002</td>
                <td>Card</td>
                <td>200</td>
                <td>Success</td>
            </tr>
            <tr>
                <td>0001</td>
                <td>xyz abc</td>
                <td>0001</td>
                <td>27-01-2002</td>
                <td>Card</td>
                <td>200</td>
                <td>Success</td>
            </tr>
            <tr>
                <td>0001</td>
                <td>xyz abc</td>
                <td>0001</td>
                <td>27-01-2002</td>
                <td>Card</td>
                <td>200</td>
                <td>Success</td>
            </tr>
            <tr>
                <td>0001</td>
                <td>xyz abc</td>
                <td>0001</td>
                <td>27-01-2002</td>
                <td>Card</td>
                <td>200</td>
                <td>Success</td>
            </tr>
            <tr>
                <td>0001</td>
                <td>xyz abc</td>
                <td>0001</td>
                <td>27-01-2002</td>
                <td>Card</td>
                <td>200</td>
                <td>Success</td>
            </tr>
            <tr>
                <td>0001</td>
                <td>xyz abc</td>
                <td>0001</td>
                <td>27-01-2002</td>
                <td>Card</td>
                <td>200</td>
                <td>Success</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Billings;
