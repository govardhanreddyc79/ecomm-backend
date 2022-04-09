import { v4 as uuid } from "uuid";
import {bat1, bat2, ball1, ball2, glove1, glove2, pad1, pad2} from "assets/images"

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    categoryName: "Bats",
    productName:"MRF Bat",
    imageSource:bat1,
    imageAlt:"MRF",
    price:1850,
    rating:4,
    quantity:0,
  },
  {
    _id: uuid(),
    categoryName: "Bats",
    productName:"CEAT Bat",
    imageSource:bat2,
    imageAlt:"CEAT",
    price:1275,
    rating:3,
    quantity:0,
  },
  {
    _id: uuid(),
    categoryName: "Balls",
    productName:"SG Ball",
    imageSource:ball1,
    imageAlt:"SG",
    price:400,
    rating:4,
    quantity:0,
  },
  {
    _id: uuid(),
    categoryName: "Balls",
    productName:"PINK Ball",
    imageSource:ball2,
    imageAlt:"PINK",
    price:850,
    rating:2,
    quantity:0,
  },
  {
    _id: uuid(),
    categoryName: "Gloves",
    productName:"GM Gloves",
    imageSource:glove1,
    imageAlt:"GM",
    price:400,
    rating:3,
    quantity:0,
  },
  {
    _id: uuid(),
    categoryName: "Gloves",
    productName:"SPARTAN Gloves",
    imageSource:glove2,
    imageAlt:"SPARTAN",
    price:200,
    rating:2,
    quantity:0,
  },
  {
    _id: uuid(),
    categoryName: "Pads",
    productName:"ADIDAS Pads",
    imageSource:pad1,
    imageAlt:"ADIDAS",
    price:550,
    rating:4,
    quantity:0,
  },
  {
    _id: uuid(),
    categoryName: "Pads",
    productName:"SPARTAN Pads",
    imageSource:pad2,
    imageAlt:"SPARTAN",
    price:850,
    rating:2,
    quantity:0,
  }
];
