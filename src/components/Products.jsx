import React, {useEffect, useState} from 'react'
import Button from './Button'
import {useData} from '../contextProvider'

const Products = () => {
  const {
    value: {
      data,
      dataValue,
      setDataValue,
      setSumPrice,
      checkClickbtn,
      setCheckClickbtn,
      quantityProduct,
      setQuantityProduct
    }
  } = useData()

  const handleClick = (value) => {
    setQuantityProduct({
      ...quantityProduct,
      [value.id]: 1
    })
    setDataValue([
      ...dataValue,
      {
        id: value.id,
        background: value.color,
        image: value.image,
        title: value.name,
        price: value.price
      }
    ])
    setCheckClickbtn([...checkClickbtn, value.id])
    setSumPrice((prev) => prev + value.price)
  }

  useEffect(() => {
    if (dataValue.length === 0) return
    localStorage.setItem('Items', JSON.stringify(dataValue))
    if (checkClickbtn.length === 0) return
    localStorage.setItem('ClickButton', JSON.stringify(checkClickbtn))
    if (Object.keys(quantityProduct).length === 0) return
    localStorage.setItem('quantity', JSON.stringify(quantityProduct))
  }, [checkClickbtn, dataValue, quantityProduct])

  useEffect(() => {
    const dataStorageBtn = localStorage.getItem('ClickButton')
    if (!dataStorageBtn) return
    setCheckClickbtn(JSON.parse(dataStorageBtn))
    const dataStorageQtt = localStorage.getItem('quantity')
    if (!dataStorageQtt) return
    setQuantityProduct(JSON.parse(dataStorageQtt))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className=" card-List">
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <div className="pb-10 card-item" key={item.id}>
            <div
              className="card-image h-[380px] flex items-center justify-center rounded-3xl  overflow-hidden"
              style={{
                background: `${item.color}`
              }}
            >
              <img
                src={item.image}
                alt=""
                className="object-cover w-ful img-shoes -ml-[20px]"
              />
            </div>
            <div className="text-lg font-bold mt-[26px] mb-[20px]">
              {item.name}
            </div>
            <div className="descript leading-[1.5] text-[13px] font-thin mb-[20px]">
              {item.description}
            </div>
            <div className="flex items-center justify-between bottom">
              <div className="text-lg font-bold price-shoes">
                ${item.price.toFixed(2)}
              </div>
              {}
              <Button
                onClick={() => handleClick(item)}
                className={
                  checkClickbtn.includes(item.id)
                    ? 'pointer-events-none w-[46px] h-[46px] flex items-center justify-center'
                    : 'pointer-events-auto pt-4 pb-4 pl-5 pr-5'
                }
              >
                {checkClickbtn.length > 0 && checkClickbtn.includes(item.id) ? (
                  <img
                    src="./img/check.png"
                    className="w-[16px] h-[16px]"
                    alt=""
                  />
                ) : (
                  'ADD TO CART'
                )}
              </Button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Products

// useEffect(() => {
//   if (Object.keys(quantityProduct).length === 0) return;
//   localStorage.setItem("quantity", JSON.stringify(quantityProduct));
// }, [quantityProduct]);

// useEffect(() => {
//   const dataStorage = localStorage.getItem("quantity");
//   if (!dataStorage) return;
//   setQuantityProduct(JSON.parse(dataStorage));
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);
