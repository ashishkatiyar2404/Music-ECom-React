import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFilter } from "../../Context/filterContext";
import { Link } from "react-router-dom";

const CategoryCards = () => {
  const { filterInitialDispatch } = useFilter();
  const [stateCategory, setStateCategory] = useState([]);

  useEffect(() => {
    const fetchingCategory = async () => {
      console.log("first");
      try {
        const { data } = await axios.get("/api/categories");
        setStateCategory(data.categories);
        console.log("second");
      } catch (err) {
        console.log(err);
      }
    };

    fetchingCategory();
  }, []);
  console.log(stateCategory);

  return (
    <>
      <div className="featured__items-container">
        {stateCategory.map(({ categoryName, categoryImage }) => (
          <div>
            <div>
              <Link to="/ProductList">
                <img
                  src={categoryImage}
                  alt="Guitars"
                  onClick={() =>
                    filterInitialDispatch({
                      type: "CATEGORY",
                      payload: categoryName,
                    })
                  }
                />
                <span className="guitar__text">{categoryName}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryCards;
