import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />

      <div className="object-cover relative" >
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg"
          alt="background_image"
        />
        <div className="absolute top-0 bg-black opacity-[0.5] w-full h-full"></div>
      </div>
      
    </div>
  );
};

export default Login;
