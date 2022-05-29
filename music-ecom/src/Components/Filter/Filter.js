import React from "react";
import { useFilter } from "../../Context/filterContext";
import "./Filter.css";

export default function Filter() {
  const { filterInitialState, filterInitialDispatch } = useFilter();
  // console.log(filterInitialState.price, typeof filterInitialState.price);

  // function ashishHandler(event) {
  //   console.log(event.target.value);
  // }
  const sortByAction = (value) => {
    filterInitialDispatch({
      type: "SortByPrice",
      payload: value,
    });
  };

  return (
    <main className="filter">
      <div className="clear">
        <span>Filters</span>
        <span onClick={() => filterInitialDispatch({ type: "CLEAR_ALL" })}>
          Clear All
        </span>
      </div>
      <div className="slider__container">
        <label>Price Range</label>
        <input
          className="slider"
          type="range"
          min={3000}
          max={11000}
          step={1000}
          value={filterInitialState.price}
          onChange={(event) =>
            filterInitialDispatch({
              type: "SLIDER_RANGE",
              payload: Number(event.target.value),
            })
          }
        />
        <div className="slider__Price">
          <span>₹{3000} </span>
          <span>- {filterInitialState.price}</span>
        </div>
      </div>

      <div className="category">
        <span>Category</span>
        <div>
          <input
            type="checkbox"
            className="guitar"
            value="Guitar"
            checked={filterInitialState.categoryName.includes("Guitar")}
            onChange={(event) =>
              filterInitialDispatch({
                type: "CATEGORY",
                payload: event.target.value,
              })
            }
          />
          <label for="guitar">Guitars</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="drum"
            value="Drum"
            checked={filterInitialState.categoryName.includes("Drum")}
            onChange={(event) =>
              filterInitialDispatch({
                type: "CATEGORY",
                payload: event.target.value,
              })
            }
          />
          <label for="drum">Drums</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="piano"
            value="Piano"
            checked={filterInitialState.categoryName.includes("Piano")}
            onChange={(event) =>
              filterInitialDispatch({
                type: "CATEGORY",
                payload: event.target.value,
              })
            }
          />
          <label for="piano">Pianos</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="xylo"
            value="Xylo"
            checked={filterInitialState.categoryName.includes("Xylo")}
            onChange={(event) =>
              filterInitialDispatch({
                type: "CATEGORY",
                payload: event.target.value,
              })
            }
          />
          <label for="xylo">Xylo</label>
        </div>
      </div>
      <div className="product__rating">
        <span>Rating</span>
        <div>
          <input
            type="radio"
            className="four"
            name="agree"
            checked={filterInitialState.rating === "4"}
            value="4"
            onChange={(event) =>
              filterInitialDispatch({
                type: "RATING",
                payload: event.target.value,
              })
            }
          />
          <label for="four">4 stars above</label>
        </div>
        <div>
          <input
            type="radio"
            className="three"
            name="agree"
            checked={filterInitialState.rating === "3"}
            value="3"
            onChange={(event) =>
              filterInitialDispatch({
                type: "RATING",
                payload: event.target.value,
              })
            }
          />
          <label for="three">3 stars above</label>
        </div>
        <div>
          <input
            type="radio"
            className="two"
            name="agree"
            checked={filterInitialState.rating === "2"}
            value="2"
            onChange={(event) =>
              filterInitialDispatch({
                type: "RATING",
                payload: event.target.value,
              })
            }
          />
          <label for="two">2 stars above</label>
        </div>
      </div>
      <div className="product__sorting">
        <span>Sort By</span>
        <div>
          <input
            type="radio"
            className="low"
            name="sort"
            checked={filterInitialState.sortBy === "LowToHigh" ? true : false}
            onChange={() => sortByAction("LowToHigh")}
          />
          <label for="low">Price - low to high</label>
        </div>
        <div>
          <input
            type="radio"
            className="high"
            name="sort"
            checked={filterInitialState.sortBy === "HighToLow" ? true : false}
            onChange={() => sortByAction("HighToLow")}
          />
          <label for="high">Price - high to low</label>
        </div>
        {/* <div>
          <input
            type="checkbox"
            className="high"
            checked={!filterInitialState.includeOutOfStock}
            onChange={(event) =>
              filterInitialDispatch({
                type: "BY_STOCK",
              })
            }
          />
          <label for="high">Include Out Of Stock</label>
        </div> */}
      </div>
    </main>
  );
}
