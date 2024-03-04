import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {
  return <div className="heading">Heading</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
