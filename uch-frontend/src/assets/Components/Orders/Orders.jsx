import Button from "../Button/Button";
import Search from "../Search/Search";
import styles from "./Orders.module.css";

const Orders = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.Notch}>
        <div className={styles.heading}>Orders</div>
        <div className={styles.actionGrp}>
          <Search />
          <Button name={"Add Order"} />
        </div>
      </div>
      <div className={styles.listContent}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Date</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>0001</td>
                <td>xyz abc</td>
                <td>00ajofsjo, oshjifoakjs, jizsfi</td>
                <td>27-01-2002</td>
                <td>Item 1, item 2, item 3</td>
                <td>200</td>
                <td>Delivered</td>
                <td>Card</td>
                <td>
                  <Button name={"Edit"} />
                  <Button name={"Delete"} />
                </td>
            </tr>
            <tr>
                <td>0001</td>
                <td>xyz abc</td>
                <td>00ajofsjo, oshjifoakjs, jizsfi</td>
                <td>27-01-2002</td>
                <td>Item 1, item 2, item 3</td>
                <td>200</td>
                <td>Delivered</td>
                <td>Card</td>
                <td>
                  <Button name={"Edit"} />
                  <Button name={"Delete"} />
                </td>
            </tr>
            <tr>
                <td>0001</td>
                <td>xyz abc</td>
                <td>00ajofsjo, oshjifoakjs, jizsfi</td>
                <td>27-01-2002</td>
                <td>Item 1, item 2, item 3</td>
                <td>200</td>
                <td>Delivered</td>
                <td>Card</td>
                <td>
                  <Button name={"Edit"} />
                  <Button name={"Delete"} />
                </td>
            </tr>
            <tr>
                <td>0001</td>
                <td>xyz abc</td>
                <td>00ajofsjo, oshjifoakjs, jizsfi</td>
                <td>27-01-2002</td>
                <td>Item 1, item 2, item 3</td>
                <td>200</td>
                <td>Delivered</td>
                <td>Card</td>
                <td>
                  <Button name={"Edit"} />
                  <Button name={"Delete"} />
                </td>
            </tr>
            <tr>
                <td>0001</td>
                <td>xyz abc</td>
                <td>00ajofsjo, oshjifoakjs, jizsfi</td>
                <td>27-01-2002</td>
                <td>Item 1, item 2, item 3</td>
                <td>200</td>
                <td>Delivered</td>
                <td>Card</td>
                <td>
                  <Button name={"Edit"} />
                  <Button name={"Delete"} />
                </td>
            </tr>
            <tr>
                <td>0001</td>
                <td>xyz abc</td>
                <td>00ajofsjo, oshjifoakjs, jizsfi</td>
                <td>27-01-2002</td>
                <td>Item 1, item 2, item 3</td>
                <td>200</td>
                <td>Delivered</td>
                <td>Card</td>
                <td>
                  <Button name={"Edit"} />
                  <Button name={"Delete"} />
                </td>
            </tr>
            <tr>
                <td>0001</td>
                <td>xyz abc</td>
                <td>00ajofsjo, oshjifoakjs, jizsfi</td>
                <td>27-01-2002</td>
                <td>Item 1, item 2, item 3</td>
                <td>200</td>
                <td>Delivered</td>
                <td>Card</td>
                <td>
                  <Button name={"Edit"} />
                  <Button name={"Delete"} />
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
