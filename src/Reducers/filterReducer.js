const initialStateOfProduct = {
  categoryName: [],
  price: 11000,
  rating: "",
  sortBy: "",
  includeOutOfStock: true,
};

const filterReducerFunc = (filterState, filterAction) => {
  switch (filterAction.type) {
    case "SortByPrice":
      return { ...filterState, sortBy: filterAction.payload };
    case "CLEAR_ALL":
      return { ...initialStateOfProduct };
    case "CATEGORY":
      const { categoryName } = filterState;
      return categoryName.includes(filterAction.payload)
        ? {
            ...filterState,
            categoryName: categoryName.filter(
              (categoryName) => categoryName !== filterAction.payload
            ),
          }
        : {
            ...filterState,
            categoryName: [...categoryName, filterAction.payload],
          };
    case "SLIDER_RANGE":
      // debugger;
      return {
        ...filterState,
        price: filterAction.payload,
      };
    case "RATING":
      return {
        ...filterState,
        rating: filterAction.payload,
      };
    case "BY_STOCK":
      return {
        ...filterState,
        includeOutOfStock: !filterState.includeOutOfStock,
      };
    default:
      return { ...filterState };
  }
};

export default filterReducerFunc;
