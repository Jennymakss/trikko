import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoCafeOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { bag_brown } from '../assets/images'

export default function Cart() {
  const cartContents = useSelector(state => state.cart)
  return (
    <main className="relative  before:absolute before:h-60 before:w-2/3 before:bg-primary before:-top-32 before:-right-72 before:-rotate-45 before:rounded-full  py-20 px-4 min-h-[70vh]">
      <section className="container mx-auto ">
        <div className=" bg-white shad rounded-md p-4 max-w-screen-md mx-auto relative">
          <div className="flex items-center gap-4 justify-between">
            <h3 className="text-2xl md:text-4x1 font-semi-bold text-primary">Trikko <span className="text-secondary">Cart</span></h3>
            <div  className="h-8 w-8 text-secondary hover:text-dark cursor-pointer flex justify-center items-center text-lg relative scale-125 -translate-x-1">
              <HiOutlineShoppingBag />
              <div className="absolute h-4 w-4 grid place-items-center text-white bg-secondary rounded-full -top-0.5 right-0.5 text-xs">{cartContents.length}</div>
              </div>
          </div>
          <div className="flex flex-col py-4 divide-y divide-slate-200">
            {
              cartContents.map(el => (
                <aside key={el.id} className="p-2 flex items-center gap-2 justify-between relative">
              <button className="h-5 w-5 text-lg grid place-items-center bg-slate-100 text-secondary cursor-pointer absolute -top-2 -right-1 rounded-full">
                <IoCafeOutline />
              </button>
              <div className="flex gap-2 items-center w-max">
                <img src={el.image} alt="" className="h-12 w-12 md:h-16 md:w-16 rounded-md object-cover flex-shrink-0" />
                <div className="flex flex-col text-secondary">
                  <h4 className="text-lg md:text-xl font-semibold">{el.productname}</h4>
                  <p className="text-sm md:text-base opacity-70 font-medium">&#8358;{el.price.toLocalestring()}</p>
                </div>
              </div>
              <p className="text-sm md:text-base opacity-70 font-medium">{el.qty}</p>
              <div className="border border-slate-200 rounded-md w-10 h-8 overflow-hidden">
                <input type="number" min={1} value={4} className="bg-transparent w-16 px-2 outline-none pt-0.5 pl-2.5 text-sm md:text-base" />
              </div>
            </aside>
              ))
            }
            
          </div>
        </div>
      </section>
    </main>
  )
}
