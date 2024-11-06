import React, {useState} from 'react'
import {useData} from '../contextProvider'
const PriceItem = () => {
  const {
    value: {
      dataValue,
      setDataValue,
      sumPrices,
      setSumPrice,
      checkClickbtn,
      setCheckClickbtn,
      quantityProduct,
      setQuantityProduct
    }
  } = useData()

  const [addClassActive, setAddClassActive] = useState(0)
  const handleMinus = (value) => {
    setQuantityProduct({
      ...quantityProduct,
      [value.id]: quantityProduct[value.id] - 1
    })
    setSumPrice((prev) => prev - value.price)
    if (quantityProduct[value.id] - 1 === 0) {
      const newData = dataValue.filter((item) => item.id !== value.id)
      setTimeout(() => {
        setAddClassActive(value.id)
      }, 200)
      setTimeout(() => {
        setAddClassActive(0)
        setDataValue(newData)
        const newId = checkClickbtn.filter((id) => id !== value.id)
        setCheckClickbtn(newId)
        setSumPrice(sumPrices - value.price)
        localStorage.setItem('Items', JSON.stringify(newData))
        const newClickButton = checkClickbtn.filter((item) => item !== value.id)
        localStorage.setItem('ClickButton', JSON.stringify(newClickButton))
      }, 400)
    }
    localStorage.setItem('quantity', JSON.stringify(quantityProduct))
  }

  const handlePlus = (value) => {
    setQuantityProduct({
      ...quantityProduct,
      [value.id]: quantityProduct[value.id] + 1
    })
    setSumPrice((prev) => prev + value.price)
    localStorage.setItem('quantity', JSON.stringify(quantityProduct))
  }

  const handleDelete = (value) => {
    const newData = dataValue.filter((item) => item.id !== value.id)
    setQuantityProduct({
      ...quantityProduct,
      [value.id]: 0
    })
    setTimeout(() => {
      setAddClassActive(value.id)
    }, 200)
    setTimeout(() => {
      setAddClassActive(0)
      setDataValue(newData)
      const newId = checkClickbtn.filter((id) => id !== value.id)
      setCheckClickbtn(newId)
      setSumPrice(sumPrices - value.price * quantityProduct[value.id])
      localStorage.setItem('Items', JSON.stringify(newData))
      const newClickButton = checkClickbtn.filter((item) => item !== value.id)
      localStorage.setItem('ClickButton', JSON.stringify(newClickButton))
    }, 400)
  }

  return (
    <>
      {dataValue.length > 0 &&
        dataValue.map((item) => (
          <div
            className={`flex price-item ${
              addClassActive === item.id ? 'active' : ''
            } `}
            key={item.id}
          >
            <div className="relative shoesPicture ">
              <div
                className="price-image w-[90px] h-[90px] rounded-full mr-[34px] "
                style={{
                  background: `${item.background}`
                }}
              >
                <div className="">
                  <img
                    src={item.image}
                    alt=""
                    className="absolute -rotate-[25deg] -top-[35px] -left-[24px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 price-info">
              <p className="text-sm font-bold mb-[10px] shoesTitle">
                {item.title}
              </p>
              <p className="mb-4 text-xl font-bold shoesPrice">
                ${item.price.toFixed(2)}
              </p>
              <div className="flex items-center justify-between price-bottom">
                <div className="flex items-center price-add">
                  <button
                    className="w-[28px] h-[28px] rounded-full bg-gray-200 flex items-center justify-center text-base font-bold"
                    onClick={() => handleMinus(item)}
                    disabled={quantityProduct[item.id] === 0 ? true : false}
                  >
                    -
                  </button>
                  <span className="ml-3 mr-3 text-sm font-thin quantity">
                    {quantityProduct[item.id]}
                  </span>
                  <button
                    className="w-[28px] h-[28px] rounded-full bg-gray-200 flex items-center justify-center text-base font-bold"
                    onClick={() => handlePlus(item)}
                  >
                    +
                  </button>
                </div>
                <div className="price-delete">
                  <button
                    className="icon-trash w-[28px] h-[28px] rounded-full bg-yellow-200 flex items-center justify-center text-base font-bold"
                    onClick={() => handleDelete(item)}
                  >
                    <img
                      src="./img/trash.png"
                      alt=""
                      className="w-[16px] h-[16px] object-cover"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default PriceItem
