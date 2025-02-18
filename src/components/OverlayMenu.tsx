import styled from "styled-components";
import { BreadTypes } from "./Menu";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";
import { formatCurrency } from "../utilities/formatCurrency";

interface PropsType {
  selectedBread: BreadTypes;
  closeOverlay: () => void;
}

const OverlayMenu: React.FC<PropsType> = ({ selectedBread, closeOverlay }) => {
  const { dispatch } = useCart();

  const addToCartHandler = () => {
    // Dispatch the action to add the selected Bread to the cart
    dispatch({ type: "ADD_TO_CART", payload: selectedBread });
    // Close the overlay
    closeOverlay();
  };

  //to stop the background from scrolling while overlay is active!!
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <BreadOverlay>
      <div className="overlayContent">
        <img src={selectedBread.image} alt={selectedBread.name} />
        <div className="BreadInfo">
          <h1>{selectedBread.name}</h1>
          <p>{selectedBread.description}</p>
          <h2>{formatCurrency(selectedBread.price)}</h2>
          <div className="quantity"></div>
          <button onClick={addToCartHandler}>Add to Cart</button>
          <button className="closeButton" onClick={closeOverlay}>
            Close
          </button>
        </div>
      </div>
    </BreadOverlay>
  );
};

export default OverlayMenu;

const BreadOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1f1e1eb5;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
  color: black;
  box-sizing: border-box;

  .overlayContent {
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 350px;
    transition: all 0.3s ease-in-out;
  }

  img {
    width: 350px;
    height: 330px;
  }

  .BreadInfo {
    padding: 10px;
    h1 {
      font-family: "Roboto Condensed", sans-serif;
    }
    p {
      font-family: "Poppins", sans-serif;
      font-size: 14px;
    }
  }

  .quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;

    button {
      background-color: #f5f7f8;
      color: #000000;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
      margin: 0 10px;
    }
  }

  button {
    font-family: "Roboto Condensed", sans-serif;
    background-color: rgb(26, 168, 197);
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin: 0 10px;
    &:nth-child(6) {
      background-color: #ff6969;
      color: #fff;
    }
  }

  @media screen and (max-width: 568px) {
    .overlayContent {
      padding: 5px;
      max-width: 300px;
    }

    img {
      width: 300px;
      height: 280px;
      border-radius: 10px;
    }

    .BreadInfo {
      padding: 5px;
      h1 {
        font-size: 26px;
      }
      p {
        font-size: 13px;
      }
      h2 {
        font-size: 20px;
      }
    }
  }
  @media screen and (max-width: 368px) {
    .overlayContent {
      padding: 5px;
      max-width: 250px;
    }

    img {
      width: 250px;
      height: 250px;
      border-radius: 10px;
    }

    .BreadInfo {
      h1 {
        font-size: 22px;
      }
      p {
        font-size: 11px;
      }
    }

    button {
      font-family: "Roboto Condensed", sans-serif;
      background-color: rgb(26, 168, 197);
      color: #000;
      border: none;
      padding: 6px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.8rem;
      margin: 0 10px;
    }
  }
`;
