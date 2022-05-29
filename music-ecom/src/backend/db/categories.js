import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Guitar",
    categoryImage:
      "https://music-e-commerce.netlify.app/assets/images/featured__guitar1.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Piano",
    categoryImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Piano.svg/1200px-Piano.svg.png",
  },
  {
    _id: uuid(),
    categoryName: "Drum",
    categoryImage:
      "https://m.media-amazon.com/images/I/8186g7plXaL._SL1500_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Xylo",
    categoryImage:
      "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/XC1HV40_urds9y.jpg",
  },
];
