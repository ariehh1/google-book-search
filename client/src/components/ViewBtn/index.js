import React from "react";
import "./style.css";

function ViewBtn(props) {
  return (
    <span
      className="btn btn-info btn-view"
      {...props}
      role="button"
      tabIndex="0"
    >
      View
    </span>
  );
}

export default ViewBtn;
