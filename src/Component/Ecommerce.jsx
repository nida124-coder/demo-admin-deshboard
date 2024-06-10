// src/components/Ecommerce.js

import React from 'react';
import { AiOutlineAppstore } from "react-icons/ai";
import { FaDollarSign, FaUsers, FaShoppingCart } from "react-icons/fa";

const Ecommerce = () => {
  return (
    <>
      <div className="p-6">
        <h2 className="text-3xl font-semibold text-gray-800">Ecommerce</h2>
        <div className='flex flex-col sm:flex sm:flex-row gap-4'>
          <div className='w-[75%] flex flex-col gap-4'>
            <div className="flex flex-col sm:flex sm:flex-row w-[100%] gap-4 mt-6">
              <div className="relative bg-white w-[100%] sm:w-[32%] py-6 px-3 text-start rounded-lg shadow">
                <h3 className="text-lg font-semibold">Our Total Profit</h3>
                <p className="text-2xl font-bold">$8,55,462</p>
                <p className="text-sm text-blue-600 mt-2">79.21% More Than last month</p>
                <div className="absolute bottom-4 right-4 bg-blue-100 rounded-full p-2">
                  <FaDollarSign className="text-blue-500 text-2xl" />
                </div>
              </div>
              <div className="relative bg-white w-[100%] sm:w-[32%] py-6 px-3 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Our Total Visitor</h3>
                <p className="text-2xl font-bold">813K</p>
                <p className="text-sm text-blue-600 mt-2">86.94% More Than last month</p>
                <div className="absolute bottom-4 right-4 bg-green-100 rounded-full p-2">
                  <FaUsers className="text-green-500 text-2xl" />
                </div>
              </div>
              <div className="relative bg-white w-[100%] sm:w-[32%] py-6 px-3 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Our Total Sold</h3>
                <p className="text-2xl font-bold">2,41,658</p>
                <p className="text-sm text-blue-600 mt-2">94.40% Look Pretty Good</p>
                <div className="absolute bottom-4 right-4 bg-yellow-100 rounded-full p-2">
                  <FaShoppingCart className="text-yellow-500 text-2xl" />
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm text-blue-600 font-semibold">Our total sold</h3>
              <table className="min-w-full mt-4">
                <thead>
                  <tr>
                    <th className="py-2 text-left text-xl">Best Seller</th>
                    <th className="py-2 text-left">Date</th>
                    <th className="py-2 text-left">Product</th>
                    <th className="py-2 text-left">Country</th>
                    <th className="py-2 text-left">Total</th>
                    <th className="py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                  <div className='flex gap-1 items-center'>
                  <img className='border rounded-full bg-slate-400 w-6 h-6' src='/images/ma2.jpg' />
                  <td className="py-2">Ossim Keter</td>
                    </div>
                   
                    <td className="py-2">16 August</td>
                    <td className="py-2">Clothes</td>
                    <td className="py-2">
                    <img className='border  bg-slate-400 w-6 h-4' src='/images/gb.webp' /></td>
                    <td className="py-2">$1,58,652</td>
                    <td className="py-2">Success</td>
                  </tr>
                  <tr className="border-t">
                  <div className='flex gap-1 items-center'>
                  <img className='border rounded-full bg-slate-400 w-6 h-6' src='/images/ma3.webp' />
                  <td className="py-2">Venter Loren</td>
                    </div>
                    
                    <td className="py-2">21 Sept</td>
                    <td className="py-2">Shoes</td>
                    <td className="py-2">
                    <img className='border  bg-slate-400 w-6 h-4' src='/images/us.webp' />
                    </td>
                    <td className="py-2">$95,025</td>
                    <td className="py-2">Success</td>
                  </tr>
                  <tr className="border-t">
                  <div className='flex gap-1 items-center'>
                  <img className='border rounded-full bg-slate-400 w-6 h-6' src='/images/ma2.jpg' />
                    <td className="py-2">Fran Loain</td>
                    </div>
                    <td className="py-2">06 March</td>
                    <td className="py-2">Electronics</td>
                    <td className="py-2">
                    <img className='border  bg-slate-400 w-6 h-4' src='/images/za.png' />
                    </td>
                    <td className="py-2">$90,155</td>
                    <td className="py-2">Success</td>
                  </tr>
                  <tr className="border-t">
                  <div className='flex gap-1 items-center'>
                  <img className='border rounded-full bg-slate-400 w-6 h-6' src='/images/ma4.webp' />
                  <td className="py-2">Loften Horen</td>
                    </div>
                   
                    <td className="py-2">12 February</td>
                    <td className="py-2">Watch</td>
                    <td className="py-2">
                    <img className='border  bg-slate-400 w-6 h-4' src='/images/at.jpg' />
                    </td>
                    <td className="py-2">$80,658</td>
                    <td className="py-2">Success</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className=" w-[75%] sm:w-[25%] gap-4 mt-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className='flex justify-between'>
                <h3 className="text-lg font-semibold">Selling Product</h3>
                <AiOutlineAppstore className='bg-white rounded-md w-[40px] h-[30px] text-black' />
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex justify-between">
                  <div className='flex gap-1'>
                    <img className='border rounded-full bg-slate-400 w-6 h-6' src='/images/sho.jpeg' />
                    <span>Nike Shoes</span>
                  </div>
                  <span>$49.00</span>
                </li>
                <li className="flex justify-between">
                  <div className='flex gap-1'>
                    <img className='border rounded-full bg-slate-400 w-6 h-6' src='/images/sho.jpeg' />
                    <span>Headphone</span>
                  </div>
                  <span>$28.00</span>
                </li>
                <li className="flex justify-between">
                  <div className='flex gap-1'>
                    <img className='border rounded-full bg-slate-400 w-6 h-6' src='/images/sho.jpeg' />
                    <span>Tree Pot</span>
                  </div>
                  <span>$30.00</span>
                </li>
                <li className="flex justify-between">
                  <div className='flex gap-1'>
                    <img className='border rounded-full bg-slate-400 w-6 h-6' src='/images/sho.jpeg' />
                    <span>Black Purse</span>
                  </div>
                  <span>$22.00</span>
                </li>
                <li className="flex justify-between">
                  <div className='flex gap-1'>
                    <img className='border rounded-full bg-slate-400 w-6 h-6' src='/images/sho.jpeg' />
                    <span>Ck Watch</span>
                  </div>
                  <span>$48.00</span>
                </li>
                <li className="flex justify-between">
                  <div className='flex gap-1'>
                    <img className='border rounded-full bg-slate-400 w-6 h-6' src='/images/sho.jpeg' />
                    <span>Tree Pot</span>
                  </div>
                  <span>$30.00</span>
                </li>
                <li className="flex justify-between">
                  <div className='flex gap-1'>
                    <img className='border rounded-full bg-slate-400 w-6 h-6' src='/images/sho.jpeg' />
                    <span>New T-shirt</span>
                  </div>
                  <span>$69.00</span>
                </li>
                <li className="flex justify-between">
                  <div className='flex gap-1'>
                    <img className='border rounded-full bg-slate-400 w-6 h-6' src='/images/sho.jpeg' />
                    <span>Jewellery</span>
                  </div>
                  <span>$78.00</span>
                </li>
                <li className="flex justify-between">
                  <div className='flex gap-1'>
                    <img className='border rounded-full bg-slate-400 w-6 h-6' src='/images/sho.jpeg' />
                    <span>New T-shirt</span>
                  </div>
                  <span>$69.00</span>
                </li>
                <li className="flex justify-between">
                  <div className='flex gap-1'>
                    <img className='border rounded-full bg-slate-400 w-6 h-6' src='/images/sho.jpeg' />
                    <span>Tree Pot</span>
                  </div>
                  <span>$30.00</span>
                </li>
                <li className="flex justify-between">
                  <div className='flex gap-1'>
                    <img className='border rounded-full bg-slate-400 w-6 h-6' src='/images/sho.jpeg' />
                    <span>New T-shirt</span>
                  </div>
                  <span>$69.00</span>
                </li>
                <li className="flex justify-between">
                  <div className='flex gap-1'>
                    <img className='border rounded-full bg-slate-400 w-6 h-6' src='/images/sho.jpeg' />
                    <span>Tree Pot</span>
                  </div>
                  <span>$30.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
