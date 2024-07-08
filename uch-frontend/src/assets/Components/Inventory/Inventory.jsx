import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Search from "../Search/Search";
import styles from "./Inventory.module.css";

const Inventory = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.Notch}>
        <div className={styles.heading}>Listed Products</div>
        <div className={styles.actionGrp}>
          <Search />
          <Link to="/admin/inventory/add"><Button name={"Add Product"} /></Link>
        </div>
      </div>
      <div className={styles.listContent}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product 1</td>
              <td>Product 1</td>
              <td>Product 1</td>
              <td>100</td>
              <td>10</td>
              <td>Category 1</td>
              <td>
                <Button name={"Edit"} />
                <Button name={"Delete"} />
              </td>
            </tr>
            <tr>
              <td>Product 2</td>
              <td>Product 2</td>
              <td>Product 2</td>
              <td>200</td>
              <td>20</td>
              <td>Category 2</td>
              <td>
                <Button name={"Edit"} />
                <Button name={"Delete"} />
              </td>
            </tr>
            <tr>
              <td>Product 3</td>
              <td>Product 3</td>
              <td>Product 3</td>
              <td>300</td>
              <td>30</td>
              <td>Category 3</td>
              <td>
                <Button name={"Edit"} />
                <Button name={"Delete"} />
              </td>
            </tr>
            <tr>
              <td>Product 3</td>
              <td>Product 3</td>
              <td>Product 3</td>
              <td>300</td>
              <td>30</td>
              <td>Category 3</td>
              <td>
                <Button name={"Edit"} />
                <Button name={"Delete"} />
              </td>
            </tr>
            <tr>
              <td>Product 3</td>
              <td>Product 3</td>
              <td>Product 3</td>
              <td>300</td>
              <td>30</td>
              <td>Category 3</td>
              <td>
                <Button name={"Edit"} />
                <Button name={"Delete"} />
              </td>
            </tr>
            <tr>
              <td>Product 3</td>
              <td>Product 3</td>
              <td>Product 3</td>
              <td>300</td>
              <td>30</td>
              <td>Category 3</td>
              <td>
                <Button name={"Edit"} />
                <Button name={"Delete"} />
              </td>
            </tr>
            <tr>
              <td>Product 3</td>
              <td>Product 3</td>
              <td>Product 3</td>
              <td>300</td>
              <td>30</td>
              <td>Category 3</td>
              <td>
                <Button name={"Edit"} />
                <Button name={"Delete"} />
              </td>
            </tr>
            <tr>
              <td>Product 3</td>
              <td>Product 3</td>
              <td>Product 3</td>
              <td>300</td>
              <td>30</td>
              <td>Category 3</td>
              <td>
                <Button name={"Edit"} />
                <Button name={"Delete"} />
              </td>
            </tr>
            <tr>
              <td>Product 3</td>
              <td>Product 3</td>
              <td>Product 3</td>
              <td>300</td>
              <td>30</td>
              <td>Category 3</td>
              <td>
                <Button name={"Edit"} />
                <Button name={"Delete"} />
              </td>
            </tr>
            <tr>
              <td>Product 3</td>
              <td>Product 3</td>
              <td>Product 3</td>
              <td>300</td>
              <td>30</td>
              <td>Category 3</td>
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

export default Inventory;
