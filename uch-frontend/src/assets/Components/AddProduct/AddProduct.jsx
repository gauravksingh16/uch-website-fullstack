import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button";
import styles from "./AddProduct.module.css";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    sizes: "",
    colors: "",
    brand: "",
    stock: "",
    images: "",
    expertNotes: "",
    specifications: {
      color: "",
      material: "",
      fit: "",
      washInstructions: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("specifications.")) {
      const specKey = name.split(".")[1];
      setFormData({
        ...formData,
        specifications: {
          ...formData.specifications,
          [specKey]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      ...formData,
      sizes: formData.sizes.split(",").map((size) => size.trim()),
      colors: formData.colors.split(",").map((color) => color.trim()),
      images: formData.images.split(",").map((image) => image.trim()),
    };

    try {
      const response = await axios.post("/api/products", productData);
      if (response.status === 201) {
        alert("Product uploaded successfully!");
        setFormData({
          name: "",
          description: "",
          price: "",
          category: "",
          sizes: "",
          colors: "",
          brand: "",
          stock: "",
          images: "",
          expertNotes: "",
          specifications: {
            color: "",
            material: "",
            fit: "",
            washInstructions: "",
          },
        });
      } else {
        alert("Error uploading product");
      }
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("An error occurred while uploading the product.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.heading}>Add Product</div>

        <div>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="sizes">Sizes (comma separated):</label>
          <input
            type="text"
            name="sizes"
            value={formData.sizes}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="colors">Colors (comma separated):</label>
          <input
            type="text"
            name="colors"
            value={formData.colors}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="images">Images URLs (comma separated):</label>
          <input
            type="text"
            name="images"
            value={formData.images}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="expertNotes">Expert Notes:</label>
          <textarea
            name="expertNotes"
            value={formData.expertNotes}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.subHeading}>Specifications:</div>

        <div>
          <label htmlFor="specifications.color">Color:</label>
          <input
            type="text"
            name="specifications.color"
            value={formData.specifications.color}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="specifications.material">Material:</label>
          <input
            type="text"
            name="specifications.material"
            value={formData.specifications.material}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="specifications.fit">Fit:</label>
          <input
            type="text"
            name="specifications.fit"
            value={formData.specifications.fit}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="specifications.washInstructions">
            Wash Instructions:
          </label>
          <input
            type="text"
            name="specifications.washInstructions"
            value={formData.specifications.washInstructions}
            onChange={handleChange}
          />
        </div>

        <button type="submit">
          <Button name="Add" />
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
