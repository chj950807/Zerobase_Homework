import { useState, useEffect } from "react";


export default function StarRating(props: { rate: number }) {
  let rating = props.rate * 20;
  const AVR_RATE:number = rating;
  const STAR_IDX_ARR:string[] = ["first", "second", "third", "fourth", "last"];
  const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]);

  const calcStarRates = () => {
    let tempStarRatesArr:number[] = [0, 0, 0, 0, 0];
    let starVerScore: number = (AVR_RATE * 70) / 100;
    let idx:number = 0;
    while (starVerScore > 14) {
      tempStarRatesArr[idx] = 14;
      idx += 1;
      starVerScore -= 14;
    }
    tempStarRatesArr[idx] = starVerScore;
    return tempStarRatesArr;
  };

  useEffect(() => {
    setRatesResArr(calcStarRates);
  }, []);

  return (
    <div className="flex items-center w-full">
      {STAR_IDX_ARR.map((item, idx) => {
        return (
          <span className="inline-flex mr-1" key={`${item}_${idx}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="34"
              viewBox="0 0 14 13"
              fill="#cacaca"
            >
              <clipPath id={`${item}StarClip`}>
                <rect width={`${ratesResArr[idx]}`} height="39" />
              </clipPath>
              <path
                id={`${item}Star`}
                d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                transform="translate(-2 -2)"
              />
              <use
                clipPath={`url(#${item}StarClip)`}
                href={`#${item}Star`}
                fill="#FCDC38"
              />
            </svg>
          </span>
        );
      })}
    </div>
  );
}
