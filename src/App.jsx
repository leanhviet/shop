import React, { useState } from "react";
import Container from "./components/Container";
import { GlobalStyles } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { data } from "autoprefixer";

const App = () => {
  const [dataValue, setDataValue] = useState([]);
  const [sumPrices, setSumPrice] = useState(0);
  const [quantityProduct, setQuantityProduct] = useState({});
  const [checkClickbtn, setCheckClickbtn] = useState([]);
  const value = {
    data,
    dataValue,
    setDataValue,
    sumPrices,
    setSumPrice,
    checkClickbtn,
    setCheckClickbtn,
    quantityProduct,
    setQuantityProduct,
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles></GlobalStyles>
        <Container value={value}></Container>
      </ThemeProvider>
    </>
  );
};

export default App;
