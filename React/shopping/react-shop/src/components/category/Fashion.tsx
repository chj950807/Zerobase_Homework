import React from "react";
import Foot from "../footer/Foot";
import Head from "../header/Head";
import ProductList from "../product/ProductList";
import { Items } from "../product/getItems";
import { Link } from "react-router-dom";

export default function Fashion() {
  interface Datas {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
  }
  const productData = Items();
  return (
    <div>
      <Head />
      <div className="py-5 px-32 dark:bg-gray-800">
        <div className="text-bold pb-10 dark:text-gray-300">홈 {">"} 패션</div>
        <h2 className="text-4xl font-bold tracking-tight dark:text-gray-200 flex justify-center">
          패션
        </h2>
        <div className=" mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productData.map((data: Datas) => {
            return (
              data.category == "men's clothing" && (
                <ul key={data.id}>
                  <Link to={"/" + data.id.toString()} >
                    <ProductList
                      id={data.id}
                      title={data.title}
                      price={data.price}
                      category={data.category}
                      image={data.image}
                    />
                  </Link>
                </ul>
              )
            );
          })}

          {productData.map((data: Datas) => {
            return (
              data.category == "women's clothing" && (
                <ul key={data.id}>
                  <Link to={"/" + data.id.toString()} >
                    <ProductList
                      id={data.id}
                      title={data.title}
                      price={data.price}
                      category={data.category}
                      image={data.image}
                    />
                  </Link>
                </ul>
              )
            );
          })}
        </div>
      </div>
      <Foot />
    </div>
  );
}
