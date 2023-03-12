import React from "react";
import Foot from "../footer/Foot";
import Head from "../header/Head";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { cartState } from "../product/Info";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { Items } from "../product/getItems";

export default function CartList() {
  const cart = useRecoilValue(cartState);

  const resetCart = useResetRecoilState(cartState);
  const reset = () => {
    if (window.confirm("장바구니의 모든 상품을 삭제하시겠습니까?")) {
      alert("장바구니의 모든 상품이 삭제되었습니다.");
      resetCart();
    } else {
      alert("취소되었습니다.");
    }
  };

  const productData = Items();
  console.log(cart);

  if (Object.keys(cart).length == 0) {
    return (
      <div>
        <Head />
        <div className="dark:bg-gray-800 h-carousel">
          <div className="font-bold pb-10 dark:text-gray-300 pt-5 px-32">
            홈 {">"} 장바구니
          </div>
          <div className="px-32">
            <div className="text-3xl font-bold dark:text-white">
              장바구니에 물품이 없습니다.
            </div>
            <Link to={"/"}>
              <button className="mt-4 flex w-32 h-14 items-center justify-center rounded-md bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-800 dark:hover:bg-indigo-900 py-3 px-8 whitespace-nowrap text-base text-white">
                담으러 가기
              </button>
            </Link>
          </div>
          <div className="flex justify-end items-center pr-5 font-bold text-3xl dark:text-white ">
            <div className="pr-3 mt-4">총:0$</div>
            <button className="mt-4 flex w-32 h-14 items-center justify-center rounded-md bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-800 dark:hover:bg-indigo-900 px-8 whitespace-nowrap text-base text-white">
              구매 하기
            </button>
          </div>
        </div>
        <Foot />
      </div>
    );
  }
  let total: number = 0;
  Object.entries<number>(cart).map(([mapid, quentity]) => {
    total += productData[mapid].price * quentity;
  });

  return (
    <div>
      <Head />
      <div className="py-5 px-32 dark:bg-gray-800">
        <div className="font-bold pb-10 dark:text-gray-300">
          홈 {">"} 장바구니
        </div>
        <ul>
          {Object.entries<number>(cart).map(([mapid, quentity]) => (
            <li key={mapid}>
              <CartItem
                id={productData[mapid].id}
                title={productData[mapid].title}
                price={productData[mapid].price}
                category={productData[mapid].category}
                image={productData[mapid].image}
                quentity={quentity}
              />
            </li>
          ))}
        </ul>
        <div className="flex justify-end items-center pr-5 font-bold text-3xl dark:text-white ">
          <div className="pr-3 mt-4">총:{total.toFixed(3)}$</div>
          <button
            className="mt-4 flex w-32 h-14 items-center justify-center rounded-md bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-800 dark:hover:bg-indigo-900 px-8 whitespace-nowrap text-base text-white"
            onClick={() => {
              reset();
            }}
          >
            구매 하기
          </button>
        </div>
      </div>
      <Foot />
    </div>
  );
}
