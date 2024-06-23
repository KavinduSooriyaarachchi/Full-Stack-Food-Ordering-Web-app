import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Craving something delicious? Look no further! Our diverse menu offers
          a wide range of cuisines to satisfy your taste buds.Place your order
          now and enjoy a scrumptious meal delivered straight to your doorstep
          in no time. Savor the convenience and flavor with every bite!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
