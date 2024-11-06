import { css } from "styled-components";
export const GlobalClasses = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }
  img,
  picture,
  svg,
  video {
    display: block;
    max-width: 100%;
  }
  input,
  select,
  textarea {
    background-color: transparent;
    outline: none;
  }
  button {
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: 0;
  }
  body {
    min-height: 100vh;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1;
  }

  .main::before {
    content: "";
    position: fixed;
    width: 300%;
    height: 100%;
    border-radius: 100%;
    top: 50%;
    left: 50%;
    display: block;
    background-color: ${(props) => props.theme.Yellow};
    transform: translateX(-50%) skewY(-8deg);
    animation: oval 8s ease-in-out infinite alternate;
  }

  @keyframes oval {
    0% {
      transform: translateX(-50%) skewY(-8deg);
    }
    100% {
      transform: translateX(-30%) skew(-4deg);
    }
  }

  .card {
    box-shadow: 0 6px 4px 1px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    position: relative;
    overflow: hidden;
    width: 360px;
    height: 600px;
    background-color: white;
    border-radius: 30px;
    padding: 0 28px;
    color: #303841;
  }

  .card::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    background-color: ${(props) => props.theme.Yellow};
    border-radius: 100%;
    top: -20%;
    left: -50%;
    z-index: -10;
  }

  .img-shoes {
    transform: rotate(-25deg);
  }

  .card-List {
    height: calc(100% - 94px);
    overflow-y: scroll;
    scrollbar-width: none;
  }

  .descript {
    color: ${(props) => props.theme.Gray};
  }

  .button-add {
    background-color: ${(props) => props.theme.Yellow};
  }

  .price-item {
    padding: 20px 0;
  }

  .icon-trash {
    background-color: ${(props) => props.theme.Yellow};
  }

  .price-list {
    overflow-y: scroll;
    scrollbar-width: none;
    height: calc(100% - 94px);
  }

  .shoesPicture {
    transform: scale(0);
    animation: shoesPicture 0.25s linear forwards;
  }

  .shoesTitle {
    transform: translateX(30px);
    opacity: 0;
    animation: shoesTitle 0.4s linear forwards;
    animation-delay: 0.35s;
  }

  .shoesPrice {
    opacity: 0;
    transform: translateX(30px);
    animation: shoesTitle 0.5s linear forwards;
    animation-delay: 0.4s;
  }

  .price-bottom {
    opacity: 0;
    animation: priceBottom 0.6s linear forwards;
    animation-delay: 0.5s;
  }

  .price-item.active {
    animation: hideItem 0.2s linear forwards;
  }

  @keyframes shoesPicture {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes shoesTitle {
    0% {
      transform: translateX(30px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes shoesPrice {
    0% {
      transform: translateX(30px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes priceBottom {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes hideItem {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }

  @media only screen and (max-width: 800px) {
    .container {
      flex-direction: column;
      height: auto;
      gap: 40px;
    }
  }
`;
