import { useEffect } from "react";
import { useDispatch } from "react-redux/es";
import { Up, Down, Remove } from "../features/cart/cartSlice";
import { ChevronDown, ChevronUp } from "../icons";

const CartItem = ({ id, title, img, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <>
      <article className="cart-item">
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">${price}</h4>
          <button
            className="remove-btn"
            onClick={() => {
              dispatch(Remove(id));
            }}
          >
            remove
          </button>
        </div>
        <div>
          <button
            className="amount-btn"
            onClick={() => {
              dispatch(Up(id));
            }}
          >
            <ChevronUp />
          </button>
          <p className="amount">{amount}</p>
          <button
            className="amount-btn"
            onClick={() => {
              if (amount === 1) {
                dispatch(Remove(id));
              } else {
                dispatch(Down(id));
              }
            }}
          >
            <ChevronDown />
          </button>
        </div>
      </article>
    </>
  );
};
export default CartItem;
