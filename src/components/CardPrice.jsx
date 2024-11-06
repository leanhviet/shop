import React, { useEffect } from "react";
import Card from "./Card";
import { useData } from "../contextProvider";

const CardPrice = () => {
  const {
    value: { dataValue, sumPrices, setSumPrice, setDataValue, quantityProduct },
  } = useData();

  useEffect(() => {
    const dataStorage = localStorage.getItem("Items");
    if (dataStorage) {
      setDataValue(JSON.parse(dataStorage));
    }
  }, [setDataValue]);

  useEffect(() => {
    if (dataValue.length > 0) {
      const totalSum = dataValue.reduce((sum, item) => {
        Object.keys(quantityProduct).map((value) => {
          if (Number(value) === item.id) {
            sum += item.price * quantityProduct[value];
          }
        });
        return sum;
      }, 0);
      setSumPrice(totalSum);
    }
  }, [dataValue, quantityProduct, setSumPrice]);

  return (
    <>
      <Card
        titleCard="Your cart"
        price={sumPrices <= 0 ? "$0.00" : `$${sumPrices.toFixed(2)}`}
        cardPrice={dataValue.length > 0 ? true : false}
      ></Card>
    </>
  );
};
export default CardPrice;
