import React from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { cartState } from "../product/Info";

interface Datas {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  quentity: number;
}


export default function CartItem(props: Datas) {
  const [cart, setCart] = useRecoilState<any>(cartState);

  return (
    <div className="list-none pb-10 ">
      <div className="group relative border-gray-300 border-2 border-solid rounded-md dark:border-none">
        <Link to={`/${props.id}`}>
          <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80 bg-white flex justify-center items-center ">
            <img
              src={props.image}
              alt={props.title}
              className="h-1/2 w-1/2 object-contain object-center lg:h-1/2 lg:w-1/2 bg-white"
            />
          </div>
        </Link>
        <div className="pt-3 pb-3 bg-gray-200 dark:bg-gray-600 ">
          <div>
            <Link to={`/${props.id}`}>
              <h3 className="text-2xl dark:text-gray-200 pl-3">
                <div>
                  <div aria-hidden="true" className="absolute "></div>
                  {props.title}
                </div>
              </h3>
            </Link>
          </div>
          <div className="text-4xl font-bold mt-2 pl-3 font-medium dark:text-gray-200">
            ${props.price * props.quentity}
          </div>
          <div className="text-lg font-bold mt-2 pl-3 font-medium dark:text-gray-200 flex items-center w-36 justify-between">
            <button
              className=" flex w-8 h-14 items-center justify-center rounded-l-md bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-800 dark:hover:bg-indigo-900 py-3 px-4 whitespace-nowrap text-base text-white"
              onClick={() => {
                setCart({
                  ...cart,
                  [props.id - 1]: (cart[props.id - 1] || 0) + 1,
                });
              }}
            >
              +
            </button>
            {props.quentity}
            <button
              className="flex w-8 h-14 items-center justify-center rounded-r-md bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-800 dark:hover:bg-indigo-900 py-3 px-4 whitespace-nowrap text-base text-white"
              onClick={() => {
                const tmp = { ...cart };
                if (tmp[props.id - 1] === 1) {
                  delete tmp[props.id - 1];
                  setCart(tmp);
                } else {
                  setCart({ ...tmp, [props.id - 1]: tmp[props.id - 1] - 1 });
                }
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
