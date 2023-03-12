import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/Im";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="relative">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="block w-full h-carousel"
            src="img_shop_fashion.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="absolute bottom-60 flex flex-col items-start">
              <h3 className="text-4xl font-bold pb-2">물빠진 청바지!</h3>
              <p className="text -lg font-bold">
                이제 막 도착한 패션 청바지를 구경해 보세요.
              </p>
              <Link to={"/fashion"}>
                <button
                  type="button"
                  className="mt-4 flex w-30 h-14 items-center justify-center rounded-md bg-gray-600 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900 py-3 px-8 whitespace-nowrap text-base text-white"
                >
                  바로가기&nbsp;
                  <ImArrowRight2 />
                </button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="block w-full h-carousel"
            src="img_shop_digital.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="absolute bottom-60  flex flex-col items-start">
              <h3 className="text-4xl font-bold pb-2">신속한 업무처리!</h3>
              <p className="text -lg font-bold">
                다양한 디지털 상품을 둘러보세요.
              </p>

              <Link to={"/digital"}>
                <button
                  type="button"
                  className="mt-4 flex w-30 h-14 items-center justify-center rounded-md bg-gray-600 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900 py-3 px-8 whitespace-nowrap text-base text-white"
                >
                  바로가기&nbsp;
                  <ImArrowRight2 />
                </button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="block w-full h-carousel"
            src="img_shop_grocery.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="absolute bottom-60 flex flex-col items-start">
              <h3 className="text-4xl font-bold pb-2">신선한 식품!</h3>
              <p className="text -lg font-bold">
                농장 직배송으로 더욱 신선한 식료품을 만나보세요.
              </p>
              <Link to={"/grocery"}>
                <button
                  type="button"
                  className="mt-4 flex w-30 h-14 items-center justify-center rounded-md bg-gray-600 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900 py-3 px-8 whitespace-nowrap text-base text-white"
                >
                  바로가기&nbsp;<ImArrowRight2 />
                </button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
