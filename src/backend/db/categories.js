import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

 export const categories = [
  {
    _id: uuid(),
    categoryName: "Bats",
    imageSource:"/assets/images/bats.jpg",
    imageAlt:"Bats",
    link:"/ProductList"
  },
  {
    _id: uuid(),
    categoryName: "Balls",
    imageSource:"/assets/images/balls.jpg",
    imageAlt:"Balls",
    link:"/ProductList"
  },
  {
    _id: uuid(),
    categoryName: "stumps",
    imageSource:"/assets/images/stumps.jpg",
    imageAlt:"Stumps",
    link:"/ProductList"
  },
  {
    _id: uuid(),
    categoryName: "gloves",
    imageSource:"/assets/images/gloves.jpg",
    imageAlt:"Gloves",
    link:"/ProductList"
  },
];

