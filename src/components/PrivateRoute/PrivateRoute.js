import React from "react";
import { useContext } from "react";
import { Redirect } from "react-router";
import { UserContext } from "../../App";
import { Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const [user, setUser] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
