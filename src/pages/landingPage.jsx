import React from 'react'
import Logo from '../assets/logo.png';
import BestSellerIcon from '../assets/best-seller.png';
import New from '../assets/new.png';
import Silog from '../assets/silogmeals.png';
import RiceBowl from '../assets/ricebowl.png';
import Combo from '../assets/combomeals.png';
import TestMenu from '../assets/testmenu.png';
import '../index.css'

function CategoryFoodCard({ price, name }) {
  return (
    <div className="w-[120px] h-36 shadow-custom rounded-md flex flex-col items-center bg-white">
        <img src={TestMenu} alt="food" className="w-20 h-20 mt-1" />
        <div className="w-20 flex flex-col items-start mt-2">
            <h2 className="font-semibold">{price}</h2>
            <p className="text-sm">{name}</p>
        </div>
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="w-[430px] h-screen flex flex-col bg-white shadow-lg">
        {/* Header */}
        <div className="flex items-center gap-2 p-2 rounded-t-lg">
          <img src={Logo} alt="logo" className="w-16 h-16" />
          <h1 className="w-28 text-sm font-medium">Mac and Gab Food Hub</h1>
        </div>

        {/* Navigation */}
        <div className="shadow-custom p-4 mx-3 flex list-none gap-7 my-2 rounded-md overflow-x-auto text-sm">
            <div className="flex flex-col whitespace-nowrap cursor-pointer justify-center items-center">
                <img src={BestSellerIcon} alt="best-seller" className="w-10 h-10" />
                <span>Best Seller</span>
            </div>
            <div className="flex flex-col whitespace-nowrap cursor-pointer justify-center items-center">
                <img src={New} alt="best-seller" className="w-10 h-10" />
                <span>New</span>
            </div>
            <div className="flex flex-col whitespace-nowrap cursor-pointer justify-center items-center">
                <img src={Silog} alt="best-seller" className="w-10 h-10" />
                <span>Silog Meals</span>
            </div>
            <div className="flex flex-col whitespace-nowrap cursor-pointer justify-center items-center">
                <img src={RiceBowl} alt="best-seller" className="w-10 h-10" />
                <span>Rice Bowl</span>
            </div>
            
            
        </div>

        {/* Food Grid */}
        <div className="p-4 mx-3 my-2 shadow-custom rounded-md overflow-y-auto flex-1 ">
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
        <div className="p-4 mx-3 my-2 flex list-none gap-4 shadow-custom rounded-md overflow-x-auto text-center items-center justify-center">
          <h1>Your Order</h1>
        </div>   
    </div>
  )
}

