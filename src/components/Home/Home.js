import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import loader from "../../icons/loading-spinner.gif";
import { Form, FormControl, InputGroup, Navbar } from "react-bootstrap";

const Home = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    fetch("https://cryptic-oasis-98497.herokuapp.com/allFoods")
      .then((res) => res.json())
      .then((data) => {
        setSpinner(false);
        setAllFoods(data);
      });
  }, []);

  let history = useHistory();
  const handleOrder = (id) => {
    history.push(`/checkOut/${id}`);
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row container search-div  ">
        <Navbar className="bg-light justify-content-between">
          <Form className="main-form">
            <InputGroup className="sub-form">
              <FormControl
                className="input-box"
                placeholder="type your favorite"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <InputGroup.Prepend>
                <InputGroup.Text className="search-btn" id="basic-addon1">
                  Search
                </InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </Form>
        </Navbar>
      </div>
      {spinner ? (
        <div className="container loading-spinner">
          <img src={loader} alt="" />
        </div>
      ) : (
        <div className="home-parent-div row">
          {allFoods.map((pd) => (
            <div className="col-md-6 col-lg-4 foods-div p-3 mt-5 ">
              <img src={pd.imageURL} alt="" />
              <h3 className="pb-4">{pd.name}</h3>
              <div className=" text-danger  row">
                <h2 className="footer col-sm-6 col-lg-6">${pd.price}</h2>

                <button
                  onClick={() => handleOrder(pd._id)}
                  className="btn btn-info col-sm-6 col-lg-6"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
