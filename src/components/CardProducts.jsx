import React from "react";
import Card from "./Card";
import { useData } from "../contextProvider";

const CardProducts = () => {
  const {
    value: { data },
  } = useData();

  return (
    <>
      <Card titleCard="Our Products" products={data && data.length > 0}></Card>
    </>
  );
};

export default CardProducts;
