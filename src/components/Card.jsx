import React from 'react'
import Products from './Products'
import PriceItem from './PriceItem'

const Card = ({titleCard, price, products, cardPrice}) => {
  return (
    <div className="card ">
      <div className="w-[50px] icon-nike mb-[12px] mt-[12px]">
        <img
          src="./img/nike.png"
          alt=""
          className="object-center w-full h-full"
        />
      </div>
      <div className="text-[24px] font-bold mb-[16px] mt-[16px] ">
        <span>{titleCard}</span>
        {price && <span className="float-right">{price}</span>}
      </div>
      {!cardPrice && price === '$0.00' && (
        <div>
          <p className="text-sm font-thin mb-[10px] pt-[10px]">
            Your cart is empty.
          </p>
        </div>
      )}
      {products && <Products></Products>}
      {cardPrice && (
        <div className="h-full pb-10 price-list">
          <PriceItem></PriceItem>
        </div>
      )}
    </div>
  )
}

export default Card
