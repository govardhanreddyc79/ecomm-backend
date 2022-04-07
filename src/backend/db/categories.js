import { v4 as uuid } from "uuid";
import {balls, bats,stumps,gloves} from "assets/images"


/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

 export const categories = [
  {
    _id: uuid(),
    categoryName: "Bats",
    imageSource:bats,
    imageAlt:"Bats",
    link:"/products"
  },
  {
    _id: uuid(),
    categoryName: "Balls",
    imageSource:balls,
    imageAlt:"Balls",
    link:"/products"
  },
  {
    _id: uuid(),
    categoryName: "stumps",
    imageSource:stumps,
    imageAlt:"Stumps",
    link:"/products"
  },
  {
    _id: uuid(),
    categoryName: "gloves",
    imageSource:gloves,
    imageAlt:"Gloves",
    link:"/products"
  },
];

