import React from "react";
import "../styles/checkoutPage.css";
import SubTotal from "../components/SubTotal";
import { useStateValue } from "../StateProvider";
import CheckoutProducts from "../components/CheckoutProducts";
import Header from "../components/Header";
import FlipMove from "react-flip-move";
const CheckoutPage = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <>
      <Header />

      <div className="checkout">
        <div className="checkout_left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            className="checkout_ad"
          />
          <div>
            <h3>hello, {user?.email}</h3>
            <h2 className="checkout_title">Shopping Basket</h2>
            {/* <FlipMove typeName={null}> */}
              {basket.map((item) => (
                <CheckoutProducts
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            {/* </FlipMove> */}
          </div>
        </div>
        <div className="checkout_right">
          <SubTotal />
          <h2>The subtotal will go here</h2>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
