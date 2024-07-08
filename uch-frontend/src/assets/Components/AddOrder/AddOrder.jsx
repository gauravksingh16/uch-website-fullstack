import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./AddOrder.module.css";
import Button from "../Button/Button";

const AddOrder = () => {
  const [order, setOrder] = useState({
    user: "",
    items: [{ product: "", quantity: 1, price: 0 }],
    totalAmount: 0,
    shippingAddress: {
      address: "",
      city: "",
      postalCode: "",
      country: "",
    },
    orderStatus: "Pending",
    payment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({
      ...order,
      [name]: value,
    });
  };

  const handleItemChange = async (index, e) => {
    const { name, value } = e.target;
    const items = [...order.items];

    // If the product field is being changed, fetch the product details
    if (name === 'product') {
      try {
        const response = await axios.get(`/api/products/${value}`);
        const product = response.data;

        items[index] = {
          ...items[index],
          product: value,
          price: product.price // Set the price based on fetched product details
        };
      } catch (error) {
        console.error('Error fetching product details', error);
      }
    } else {
      items[index] = {
        ...items[index],
        [name]: value
      };
    }

    setOrder({
      ...order,
      items
    });
  };

  const handleAddItem = () => {
    setOrder({
      ...order,
      items: [...order.items, { product: "", quantity: 1, price: 0 }],
    });
  };

  const handleRemoveItem = (index) => {
    const items = [...order.items];
    items.splice(index, 1);
    setOrder({
      ...order,
      items,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/orders", order);
      console.log("Order created successfully", response.data);
      // Reset form or redirect to another page
    } catch (error) {
      console.error("Error creating order", error);
    }
  };

  useEffect(() => {
    const total = order.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setOrder((prevOrder) => ({
      ...prevOrder,
      totalAmount: total,
    }));
  }, [order.items]);

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.heading}>Create Order</div>

        <div>
          <label>User ID:</label>
          <input
            type="text"
            name="user"
            value={order.user}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <div className={styles.subheading}>Items</div>
          {order.items.map((item, index) => (
            <div key={index} className={styles.addItems}>
              <div>
                <label>Product ID:</label>
                <input
                  type="text"
                  name="product"
                  value={item.product}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                />
              </div>
              <div>
                <label>Quantity:</label>
                <input
                  type="number"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                  min="1"
                />
              </div>
              <div>
                <label>Price:</label>
                <input
                  type="number"
                  name="price"
                  value={item.price}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                  min="0"
                  step="0.01"
                />
              </div>
              <div>
                <button type="button" onClick={() => handleRemoveItem(index)}>
                  <Button name="Remove" />
                </button>
              </div>
            </div>
          ))}
          <div>
            <button type="button" onClick={handleAddItem}>
              <Button name="Add Item" />
            </button>
          </div>
        </div>

        <div>
          <label>Total Amount:</label>
          <input
            type="number"
            name="totalAmount"
            value={order.totalAmount}
            readOnly
          />
        </div>

        <div className={styles.address}>
          <div className={styles.subheading}>Shipping Address</div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="shippingAddress.address"
              value={order.shippingAddress.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>City:</label>
            <input
              type="text"
              name="shippingAddress.city"
              value={order.shippingAddress.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Postal Code:</label>
            <input
              type="text"
              name="shippingAddress.postalCode"
              value={order.shippingAddress.postalCode}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Country:</label>
            <input
              type="text"
              name="shippingAddress.country"
              value={order.shippingAddress.country}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label>Order Status:</label>
          <select
            name="orderStatus"
            value={order.orderStatus}
            onChange={handleChange}
            required
          >
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>

        <div>
          <label>Payment ID:</label>
          <input
            type="text"
            name="payment"
            value={order.payment}
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit">
            <Button name="Create Order" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOrder;
