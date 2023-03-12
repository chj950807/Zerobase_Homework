import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { Link } from 'react-router-dom'
export default function Cart() {
  return (
  <Link to={"/cart"}>
    <div className='flex text-3xl pl-3 pr-3 dark:text-white justify-end w-auto lg:pr-32'>
      <HiOutlineShoppingBag />
    </div>
  </Link>
  )
}
