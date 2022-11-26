import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { calculateTotal, getCartItems } from "./features/cart/cartSlice";
import Model from "./components/Model";

const App = () => {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { model } = useSelector((store) => store.model);
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      {model && <Model />}
      <Navbar />
      <CartContainer />
    </>
  );
};
export default App;
