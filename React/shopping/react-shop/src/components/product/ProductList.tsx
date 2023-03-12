import React from "react";

interface Datas {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export default function ProductList(props: Datas) {
  return (
    <li className="list-none">
      <div className="group relative border-gray-300 border-2 border-solid rounded-md dark:border-none ">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80 bg-white flex justify-center items-center ">
          <img
            src={props.image}
            alt={props.title}
            className="h-1/2 w-1/2 object-contain object-center lg:h-1/2 lg:w-1/2 bg-white"
          />
        </div>
        <div className="pt-3 pb-3 bg-gray-200 dark:bg-gray-600 ">
          <div>
            <h3 className="text-md dark:text-gray-200 pl-3">
              <div>
                <div aria-hidden="true" className="absolute inset-0"></div>
                {props.title}
              </div>
            </h3>
          </div>
          <div className="text-sm mt-2 pl-3 font-medium dark:text-gray-200">
            {props.price}$
          </div>
        </div>
      </div>
    </li>
  );
}
