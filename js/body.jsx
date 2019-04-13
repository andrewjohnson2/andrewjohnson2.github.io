import React from 'react';
import { Link } from "react-router-dom";
import Header from "./header";


const Body = () => { // eslint-disable-line
  return (
    <div className="container top center">
      <div className="row">
        <div className="col">
          <Header top />
        </div>
      </div>
    </div>
  );
};

export default Body;
