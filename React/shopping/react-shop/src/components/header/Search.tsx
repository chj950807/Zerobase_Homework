import React from 'react'
import { Items } from "../product/getItems";
import { useNavigate } from 'react-router-dom';

export default function Search() {

  const productData = Items();
  const navigate = useNavigate();

  const handleKeyPress = (event:any) => {
    if (event.key == 'Enter') {
      for (let i = 0; i < productData.length; i++){
        if (event.target.value == productData[i].title) {
          navigate(`/${productData[i].id}`);
        }
      }
    }
  }
  return (
    <div className="flex justify-end w-auto">
      <input
        onKeyPress={handleKeyPress}
        type="text"
        placeholder="검색"
        className="pl-2 bg-gray-300 w-300 h-10 dark:bg-gray-600 left-0 top-4 dark:text-white"
      />
    </div>
  );
}