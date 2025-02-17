import { Fragment, useState } from "react";
import BreadLogo from "../assets/breadicon.svg";
import styled from "styled-components";
import Cart from "./Cart";
import { useCart } from "../context/CartContext";
const categories = ["All", "Sweets", "Meat", "Vegetarian"];

interface filterData {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

const Header: React.FC<filterData> = ({
  onCategoryChange,
  selectedCategory,
}) => {
  const [openCloseCart, setOpenCloseCart] = useState(false);
  const { state } = useCart();

  // Cart Open Handler
  const openCartHandler = () => {
    setOpenCloseCart(true);
  };
  const closeCartHandler = () => {
    setOpenCloseCart(false);
  };
  return (
    <Fragment>
      <HeaderWrapper>
        <div className="cartFloating">
          <h2 onClick={openCartHandler}>
            Cart <span>{state.cart.length}</span>
          </h2>
        </div>
        <div className="Header">
          <img src={BreadLogo} />
        </div>
        <div className="categories">
          <div className="tags">
            {categories.map((category) => (
              <h3
                key={category}
                onClick={() => onCategoryChange(category)}
                className={selectedCategory === category ? "active" : ""}
              >
                {category}
              </h3>
            ))}
          </div>
        </div>
      </HeaderWrapper>
      {openCloseCart && <Cart closeCart={closeCartHandler} />}
    </Fragment>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  .cartFloating {
    position: fixed;
    background: rgb(20, 157, 203);
    margin: 10px;
    padding: 10px;
    border-radius: 15px;
    color: #fff;
    cursor: pointer;
    z-index: 1000;
    > h2 {
      display: flex;
      align-items: center;
      font-family: "Poppins", sans-serif;
      background: rgb(26, 168, 197);
      height: 0px;
      border-radius: 10px;
      color: #fff;
      cursor: pointer;

      span {
        margin-left: 6px;
        background-color: rgb(245, 142, 15);
        height: 40px;
        width: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .Header {
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
      height: 250px;
    }
  }

  .categories {
    display: flex;
    flex-direction: column;
    align-items: center;

    .tags {
      font-family: "Poppins", sans-serif;
      width: 50%;
      display: flex;
      justify-content: space-around;
      .active {
        background-color: #000000;
        color: white;
      }

      h3 {
        color: black;
        box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
        box-sizing: border-box;
        border-radius: 5px;
        padding: 5px 10px;
        background-color: #fff;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
          background-color: #000000;
          color: white;
        }
      }
    }
  }

  @media (max-width: 1168px) {
    .categories {
      margin-inline: 20px;
      .tags {
        width: 100%;
        justify-content: space-between;
      }
    }
  }
  @media (max-width: 630px) {
    .cartFloating {
      position: fixed;
      background: rgb(20, 157, 203);
      margin: 10px;
      padding: 3px;
      > h2 {
        span {
          margin-left: 6px;
          background-color: rgb(245, 142, 15);
          height: 40px;
          width: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .Header {
      .logo {
        img {
          height: 180px;
        }
      }
    }
    .categories {
      margin: 20px;
      .tags {
        h3 {
          margin-inline: 10px;
        }
      }
    }
  }
  @media (max-width: 438px) {
    .Header {
      flex-wrap: wrap;
      width: 80%;
      margin: auto;
    }
    .categories {
      .tags {
        justify-content: center;
        flex-wrap: wrap;
        h3 {
          font-size: 13px;
        }
      }
    }
  }
`;
