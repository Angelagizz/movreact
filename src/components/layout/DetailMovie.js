import React from "react";
import Review from "./Review";
import Cast from "./Casts";
import Overview from "./Overview";

export default function DetailMovie(props) {
  switch (props.change) {
    case 2:
      return <Cast />;
    case 3:
      return <Review />;
    default:
      return <Overview />;
  }
}