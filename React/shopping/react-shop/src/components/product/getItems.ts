import {selector,useRecoilValue } from "recoil";
import axios from "axios";


interface Datas {
  [x: string]: any;
  description: string;
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rate: number;
  count: number;
}

const getItems = selector<Datas>({
  key: "getItemInfo",
  get: async ({ get }) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data || [];
    } catch (error) {
      console.log("Error:" + error);
      return [];
    }
  },
});

export function Items() {
  const items: Datas = useRecoilValue(getItems);
  return items;
}

