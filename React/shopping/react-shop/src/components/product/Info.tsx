import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Items } from "./getItems";
import StarRating from "./StarRating";
import { useRecoilState, atom } from "recoil";

interface Datas {
  description: string;
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const cartState = atom<any>({
  key: "cartState",
  default: "",
});

export function Info() {
  const productData = Items();
  const loc = useLocation();
  const location = loc.pathname.slice(1);
  let num: number = -1;

  for (let i = 0; i < productData.length; i++) {
    if (location == productData[i].id.toString()) {
      num = i;
    }
  }

  const [cart, setCart] = useRecoilState<any>(cartState);
  let real_category = "";
  if (productData[num].category == "electronics") {
    real_category += "디지털";
  } else if (productData[num].category == "jewelery") {
    real_category += "액세서리";
  } else {
    real_category += "패션";
  }
  return (
    <div>
      <div className="bg-white">
        <div className="pt-6 pb-5 px-32 dark:bg-gray-800">
          <div className="text-bold pb-10 dark:text-gray-300">
            {real_category} {">"} {productData[num].title}
          </div>

          <div className="lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            {/* <!-- Image gallery --> */}
            <div className=" mt-6 max-w-2xl sm:px-6 lg:max-w-7xl">
              <div className=" w-auto overflow-hidden rounded-2xl lg:grid lg:col-start-1">
                <img
                  src={productData[num].image}
                  alt="Two each of gray, white, and black shirts laying flat."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:col-start-2">
              {/* <!-- title --> */}
              <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6">
                <div className="lg:col-span-2">
                  <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-400">
                    {productData[num].title}
                  </h1>
                </div>

                <div className="py-10 lg:col-span-1 lg:col-start-2 lg:pt-6 lg:pb-16 lg:pr-8">
                  {/* <!-- description--> */}
                  <div>
                    <div className="space-y-6">
                      <p className="text-base text-gray-900 dark:text-gray-400">
                        {productData[num].description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* <!-- 리뷰, 별점 --> */}
                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <StarRating rate={productData[num].rating.rate} />
                    </div>
                    <p className="sr-only">4 out of 5 stars</p>
                    <div className="ml-3 text-base font-medium text-gray-900 dark:text-gray-400 ">
                      {productData[num].rating.count} 참여
                    </div>
                  </div>

                  {/* <!-- price --> */}
                  <div className="mt-4 lg:row-span-3 lg:mt-0">
                    <p className="text-3xl tracking-tight text-gray-900 dark:text-gray-400">
                      {productData[num].price}$
                    </p>
                  </div>

                  <form className=" flex w-72 justify-around">
                    <button
                      onClick={() => {
                        setCart({ ...cart, [num]: (cart[num] || 0) + 1 });
                      }}
                      type="button"
                      className="mt-10 flex w-32 h-12 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 whitespace-nowrap text-base text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      장바구니에 담기
                    </button>

                    <Link to={"/cart"}>
                      <button
                        type="button"
                        className="mt-10 flex w-32 h-12 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 whitespace-nowrap text-base text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        장바구니로 이동
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
