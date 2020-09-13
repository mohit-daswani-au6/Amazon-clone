import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import OrderComponent from "../components/orderComponent";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import "../styles/orders.css";
const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
      if(user){
        db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
      }

  }, [user]);
  return (
    <>
      <Header />
      <div className="orders">
        <h1>Your Orders</h1>
        {orders?.map(order=>(
            <OrderComponent order={order}/>
        ))}
      </div>
    </>
  );
};

export default Orders;
