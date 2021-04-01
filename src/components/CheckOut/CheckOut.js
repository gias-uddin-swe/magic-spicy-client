import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router";
import "./CheckOut.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { useContext } from "react";

const CheckOut = () => {
  const [user, setUser] = useContext(UserContext);
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`https://cryptic-oasis-98497.herokuapp.com/food/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  const handleUserOrders = () => {
    const { name, price, description, imageURL } = item;
    const newUser = {
      productName: name,
      productPrice: price,
      ProductDescription: description,
      ProductImage: imageURL,
    };
    newUser.Username = user.name;
    newUser.Email = user.email;
    newUser.Date = new Date();
    fetch("https://cryptic-oasis-98497.herokuapp.com/setOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    console.log(newUser);
  };
  return (
    <div>
      <div className="container row  review-food">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>1</td>
              <td>${item.price}</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="3">Total</td>
              <th>${item.price}.00</th>
            </tr>
          </tbody>
        </Table>
        <Link onClick={handleUserOrders} to="/orders" className="btn btn-info ">
          CheckOut
        </Link>
      </div>
    </div>
  );
};

export default CheckOut;
