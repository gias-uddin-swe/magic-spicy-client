import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router";
import "./CheckOut.css";

const CheckOut = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  console.log(item);
  useEffect(() => {
    fetch(`http://localhost:5000/food/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
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
      </div>
    </div>
  );
};

export default CheckOut;
