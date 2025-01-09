import React from 'react'
import Logo from '../assets/logo.png';

function CategoryFoodCard({ price, name }) {
  return (
    <div className="w-[120px] h-36 shadow-md rounded-md flex flex-col justify-center items-center bg-white">
      <h2 className="font-semibold">{price}</h2>
      <p className="text-sm mt-1">{name}</p>
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="w-[430px] h-screen flex flex-col bg-white shadow-lg">
        {/* Header */}
        <div className="flex items-center gap-2 p-3 rounded-t-lg">
          <img src={Logo} alt="logo" className="w-16 h-16" />
          <h1 className="w-28 text-sm font-medium">Mac and Gab Food Hub</h1>
        </div>

        {/* Navigation */}
        <div className="p-4 mx-3 flex list-none gap-4 shadow-md rounded-md overflow-x-auto">
          <li className="whitespace-nowrap cursor-pointer hover:text-blue-600">Best Seller</li>
          <li className="whitespace-nowrap cursor-pointer hover:text-blue-600">New</li>
          <li className="whitespace-nowrap cursor-pointer hover:text-blue-600">Silog Meals</li>
          <li className="whitespace-nowrap cursor-pointer hover:text-blue-600">RiceBowl</li>
        </div>

        {/* Food Grid */}
        <div className="p-4 mx-3 my-2 shadow-md rounded-md overflow-y-auto flex-1">
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            <CategoryFoodCard price="$15" name="Beef Tapa" />
            <CategoryFoodCard price="$15" name="Beef Tapa" />
            <CategoryFoodCard price="$15" name="Beef Tapa" />
            <CategoryFoodCard price="$15" name="Beef Tapa" />
            <CategoryFoodCard price="$15" name="Beef Tapa" />
            <CategoryFoodCard price="$15" name="Beef Tapa" />
            <CategoryFoodCard price="$15" name="Beef Tapa" />
            <CategoryFoodCard price="$15" name="Beef Tapa" />
            <CategoryFoodCard price="$15" name="Beef Tapa" />
          </div>
        </div>
        <div className="p-4 mx-3 my-4 flex list-none gap-4 shadow-md rounded-md overflow-x-auto text-center items-center justify-center">
          <h1>Your Order</h1>
        </div>   
    </div>
  )
}

