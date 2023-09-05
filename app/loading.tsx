import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <span className="loading loading-ring loading-lg"></span>
      <h1>Loading...</h1>
    </div>
  );
};

export default loading;
