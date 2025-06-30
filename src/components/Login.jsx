import Header from "./Header";
import { BACKGROUND_IMG_URL } from "../constants/ImageURL";

const Login = () => {
  return (
    <div className="relative h-screen w-screen">
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 z-0 h-full w-full object-cover"
        src={BACKGROUND_IMG_URL}
        alt="background_image"
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 z-10 h-full w-full bg-black opacity-[0.5]"></div>
      {/* Header and content */}
      <div className="relative z-20">
        <Header />
        {/* You can add login form or other content here */}
      </div>
    </div>
  );
};

export default Login;
