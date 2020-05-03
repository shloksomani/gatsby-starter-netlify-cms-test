import React, { Component } from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";

export class index extends Component {
  render() {
    return (
      <div>
        Helloooooo
        <Link to="/contact">Contact</Link>
        <Link to="/home">Home</Link>
      </div>
    );
  }
}

export default index;
