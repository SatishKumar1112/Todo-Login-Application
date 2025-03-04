import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
// import "bootstrap/dist/css/bootstrap.min.css";

const MainPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle state

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Welcome to My Application</h2>

      {/* Card UI */}
      <div className="card mx-auto p-4 shadow" style={{ maxWidth: "400px" }}>
        {/* Toggle Buttons */}
        <div className="d-flex justify-content-around mb-3">
          <button
            className={`btn ${isLogin ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`btn ${
              !isLogin ? "btn-success" : "btn-outline-success"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {/* Form Display */}
        {isLogin ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default MainPage;
