import { Items } from "./getItems";
import React from "react";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
export default function Product() {
  interface Datas {
    description: string;
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    rate: number;
    count: number;
  }
  const productData = Items();

  return (
    <div className="bg-gray-100 dark:text-gray-100 dark:bg-gray-800">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-4xl font-bold tracking-tight dark:text-gray-200 flex justify-center">
          패션
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productData.map((data: Datas) => {
            return (
              data.category == "men's clothing" && (
                <ul key={data.id}>
                  <Link to={data.id.toString()}>
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
        <h2 className="text-4xl font-bold tracking-tight dark:text-gray-200 flex justify-center mt-9">
          액세서리
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productData.map((data: Datas) => {
            return (
              data.category == "jewelery" && (
                <ul key={data.id}>
                  <Link to={data.id.toString()}>
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
        <h2 className="text-4xl font-bold tracking-tight dark:text-gray-200 flex justify-center mt-9">
          디지털
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productData.map((data: Datas) => {
            return (
              data.category == "electronics" && (
                <ul key={data.id}>
                  <Link to={data.id.toString()}>
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
    </div>
  );
}
