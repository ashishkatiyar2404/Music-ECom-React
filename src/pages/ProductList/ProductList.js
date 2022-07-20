import React from "react";
// import Navbar from "../../Components/Navbar/Navbar";
// import axios from "axios";
import "./ProductList.css";
import { products } from "../../backend/db/products";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Filter from "../../Components/Filter/Filter";
import { useFilter } from "../../Context/filterContext";

export default function ProductList() {
  // FETCHING PRODUCT
  /* const [ashishProducts, setProducts] = useState();

  const fetchAllProcuts = () => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");

        console.log(products);
      } catch (err) {
        console.log("HUM HAI ERROR", err);
      }
    })();
  };

  useEffect(() => {
    fetchAllProcuts();
  }, []);
  */

  const {
    filterInitialState: {
      categoryName,
      rating,
      sortBy,
      includeOutOfStock,
      price,
    },
  } = useFilter();

  const transformProducts = () => {
    let sortedProducts = [...products];

    if (sortBy) {
      sortedProducts = sortedProducts.sort((a, b) => {
        return sortBy === "LowToHigh" ? a.price - b.price : b.price - a.price;
      });
    }

    if (rating) {
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= rating);
    }
    if (categoryName) {
      sortedProducts =
        categoryName.length === 0
          ? sortedProducts
          : sortedProducts.filter((product) =>
              categoryName.includes(product.categoryName)
            );
    }
    if (price) {
      sortedProducts = sortedProducts.filter((item) => item.price <= price);
    }

    if (includeOutOfStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.includeOutOfStock);
      return sortedProducts;
    }

    return sortedProducts;
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex-container product__page">
        <div className="filter__fixed">
          <Filter />
        </div>
        <div className="filtered__products">
          {/* PRODUCT PAGE */}
          {transformProducts().map((items) => (
            <ProductCard items={items} key={items._id} />
          ))}
        </div>
      </div>
    </>
  );
}
