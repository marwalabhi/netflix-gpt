import React from "react";
import { LOGO_URL } from "../constants/ImageURL";

const Header = () => {
  return (
    <div className="absolute z-10 px-8 py-2">
      <img className="mx-8 my-2 w-48" src={LOGO_URL} alt="logo" />
    </div>
  );
};

export default Header;
