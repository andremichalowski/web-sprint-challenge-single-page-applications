import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <Link to="/pizza">
        <Button color="danger" size="lg" type="submit">
          Pizza Form
        </Button>
      </Link>
    </div>
  );
};

export default Home;
