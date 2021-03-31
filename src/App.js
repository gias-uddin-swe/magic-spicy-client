import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Login from "./components/Login/Login";
import Error404 from "./components/Error404/Error404";
import Admin from "./components/Admin/Admin";
import Header from "./components/Header/Header";
import CheckOut from "./components/CheckOut/CheckOut";
import { createContext, useState } from "react";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    userImage: "",
    loggedIn: false,
  });

  return (
    <UserContext.Provider value={[user, setUser]} className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/checkOut/:id">
            <CheckOut />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          {/* <Route path="/manageProduct">
            <ManageProduct />
          </Route> */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
