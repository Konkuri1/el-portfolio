import React from "react";
import preloader from "../../assets/images/preloader.svg";
const Loader = () => {
  return (
    <div>
      <img src={preloader} alt="loading" className="h-96 w-96 mx-auto" />
    </div>
  );
};

export default Loader;
