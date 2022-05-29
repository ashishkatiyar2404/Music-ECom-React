import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Guitar GT-1304",
    description: "Shiv Khera",
    price: 3000,
    categoryName: "Guitar",
    includeOutOfStock: true,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1555638138-3892e6df8a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjb3VzdGljJTIwZ3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    title: "Guitar 3S-1222",
    description: "Junaid Qureshi",
    price: 5000,
    categoryName: "Guitar",
    includeOutOfStock: true,
    rating: 2,
    image:
      "https://images.unsplash.com/photo-1555638138-3892e6df8a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjb3VzdGljJTIwZ3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    title: "Guitar SM 999",
    description: "Shiv Khera",
    price: 7000,
    categoryName: "Guitar",
    includeOutOfStock: true,
    rating: 3,
    image:
      "https://images.unsplash.com/photo-1555638138-3892e6df8a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjb3VzdGljJTIwZ3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    title: "Guitar AK-47 out of stock",
    description: "Shiv Khera",
    price: 11000,
    categoryName: "Guitar",
    includeOutOfStock: false,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1555638138-3892e6df8a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjb3VzdGljJTIwZ3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    title: "Piano QW-0909",
    description: "Shiv Khera",
    price: 3000,
    categoryName: "Piano",
    includeOutOfStock: true,
    rating: 3,
    image:
      "https://images.unsplash.com/photo-1555638138-3892e6df8a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjb3VzdGljJTIwZ3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    title: "Piano LP-1111",
    description: "Shiv Khera",
    price: 5000,
    categoryName: "Piano",
    includeOutOfStock: true,
    rating: 2,
    image:
      "https://images.unsplash.com/photo-1555638138-3892e6df8a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjb3VzdGljJTIwZ3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    title: "Piano NK-1234",
    description: "Shiv Khera",
    price: 7000,
    categoryName: "Piano",
    includeOutOfStock: true,
    rating: 3,
    image:
      "https://images.unsplash.com/photo-1555638138-3892e6df8a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjb3VzdGljJTIwZ3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    title: "Piano JG-1029 out of stock",
    description: "Shiv Khera",
    price: 11000,
    categoryName: "Piano",
    includeOutOfStock: false,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1555638138-3892e6df8a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjb3VzdGljJTIwZ3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    title: "XyloPhone FV-7261",
    description: "Shiv Khera",
    price: 3000,
    categoryName: "Xylo",
    includeOutOfStock: true,
    rating: 2,
    image:
      "https://images.unsplash.com/photo-1555638138-3892e6df8a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjb3VzdGljJTIwZ3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    title: "XyloPhone GH-5729",
    description: "Shiv Khera",
    price: 5000,
    categoryName: "Xylo",
    includeOutOfStock: true,
    rating: 2,
    image:
      "https://images.unsplash.com/photo-1555638138-3892e6df8a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjb3VzdGljJTIwZ3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    title: "XyloPhone BH-2378",
    description: "Shiv Khera",
    price: 7000,
    categoryName: "Xylo",
    includeOutOfStock: true,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1555638138-3892e6df8a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjb3VzdGljJTIwZ3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    title: "XyloPhone RF-7809 out of stock",
    description: "Shiv Khera",
    price: 11000,
    categoryName: "Xylo",
    includeOutOfStock: false,
    rating: 3,
    image:
      "https://images.unsplash.com/photo-1555638138-3892e6df8a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjb3VzdGljJTIwZ3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    title: "Drum DC-7387",
    description: "Shiv Khera",
    price: 3000,
    categoryName: "Drum",
    includeOutOfStock: true,
    rating: 2,
    image:
      "https://images.unsplash.com/photo-1555638138-3892e6df8a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjb3VzdGljJTIwZ3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    title: "Drum HI-3628",
    description: "Shiv Khera",
    price: 5000,
    categoryName: "Drum",
    includeOutOfStock: true,
    rating: 3,
    image:
      "https://images.unsplash.com/photo-1555638138-3892e6df8a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjb3VzdGljJTIwZ3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    title: "Drum DI-3782",
    description: "Shiv Khera",
    price: 7000,
    categoryName: "Drum",
    includeOutOfStock: true,
    rating: 3,
    image:
      "https://images.unsplash.com/photo-1555638138-3892e6df8a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjb3VzdGljJTIwZ3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    title: "Drum BS-9898 out of stock",
    description: "Shiv Khera",
    price: 11000,
    categoryName: "Drum",
    includeOutOfStock: false,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1555638138-3892e6df8a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjb3VzdGljJTIwZ3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];
