import React, { useEffect, useState } from "react";
import "./SignUp.css";
import img from "../../amazon-image/download1.png";
import { IoMdArrowDropright } from "react-icons/io";
import {useNavigate} from "react-router-dom"



const Signup = () => {
  const navigate = useNavigate('');
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmit(false);
  };

  const Loginbtn = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };

  
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      // navigate("/");
    }
  });
  

  return (

    
    <>
      <div className="messages"></div>
      <div className="signup-container">
        <div className="logo">
          <img src={img} alt="" />
        </div>

        <div className="signup-box">
          <div className="box-content">
            <h2>Sign In</h2>
            <label>Email or Mobile Phone Number</label> <br />
            <input type="text" onChange={handleName} value={name} /> <br />
            <button
              type="submit"
              onClick={Loginbtn}
              value={submit}
              className="btn"
            >
              Continue
            </button>
            <p>
              By continuing, you agree to Amazon's{" "}
              <span>Conditions of Use</span> and <span>Privacy Notice.</span>{" "}
            </p>
            <div className="icon">
              <p>
                <IoMdArrowDropright /> <span> Need help?</span>
              </p>
            </div>
          </div>
        </div>

        <div className="signup2">
          <hr />
          <h5>New to Amazon?</h5>
          <div className="line">
            <hr />
          </div>
        </div>

        <div>
          <button className="button">Create your Amazon Account</button>
        </div>
        <div className="line2"></div>

        <div className="box-item1">
          <span> Condition of use </span>
          <span> Privacy Notice </span>
          <span> Help </span>
        </div>

        <h6>© 1996-2022, Amazon.com, Inc. or its affiliates</h6>
      </div>
    </>
  );
};

export default Signup;
