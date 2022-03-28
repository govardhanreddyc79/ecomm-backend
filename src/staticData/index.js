import { v4 as uuid } from "uuid";
import {pads, helmet} from "../assets/images";


export const newDeals = [
    {
      _id: uuid(),
      dealName: "Pads",
      imageSource:pads,
      imageAlt:"Pads",
      link:"/ProductList",
      discount:70
    },
    {
      _id: uuid(),
      dealName: "Helmet",
      imageSource:helmet,
      imageAlt:"Helmet",
      link:"/ProductList",
      discount:50
    },
]