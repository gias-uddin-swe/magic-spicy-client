import React from "react";
import "./Orders.css";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Orders = () => {
  const [user, setUser] = useContext(UserContext);
  const [ordered, setOrdered] = useState([]);
  console.log(ordered);
  useEffect(() => {
    fetch(`http://localhost:5000/myOrders?email=` + user.email)
      .then((res) => res.json())
      .then((data) => setOrdered(data));
  }, []);

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <div className="row order-page">
        <div className="col-md-6 col-sm-12 col-lg-6">
          {ordered.map((pd) => (
            <div className="product-box row">
              <div className="col-md-6 col-lg-6 col-sm-12 product-img">
                <img src={pd.ProductImage} alt="" />
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <p>product name: {pd.productName}</p>
                <p>product description: {pd.ProductDescription}</p>
                <p>quantity: 1</p>
                <p>Added By: {pd.Email}</p>
                <p>Rating: ****</p>
              </div>
              <button className="btn btn-danger w-100% m-auto pl-5 pr-5">
                Cancel
              </button>
            </div>
          ))}
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 place-order-area">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-danger">Please Type your Address </h1>
            <input
              className="input-field"
              name="name"
              defaultValue={user.name}
              ref={register}
              required
            />
            <br />
            <input
              className="input-field"
              name="Phone"
              placeholder="Phone"
              ref={register}
              required
            />
            <br />
            <input
              className="input-field"
              name="email"
              defaultValue={user.email}
              ref={register}
              required
            />

            <br />
            <input
              className="input-field"
              name="Division"
              placeholder="Division"
              ref={register}
              required
            />
            <br />
            <input
              className="input-field"
              name="city"
              placeholder="Pick-Up point or City"
              ref={register}
              required
            />
            <br />
            <input
              className="input-field"
              name="address"
              placeholder="your Address"
              ref={register}
              required
            />
            <br />
            <input
              className="input-field"
              name="Date"
              type="date"
              ref={register}
              required
            />

            <br />

            <br />
            <input
              className="btn btn-info pl-5 pr-5 place-btn"
              type="submit"
              value="Place Order"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Orders;
