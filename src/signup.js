import React, { useState } from "react";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [ageErr, setAgeErr] = useState(false);
  const [mobileNumberErr, setMobileNumberErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [inputPassword, setInputPassword] = useState("password");
  function resetForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobileNumber("");
    setPassword("");
    setFirstNameErr(false);
    setLastNameErr(false);
    setEmailErr(false);
    setAgeErr(false);
    setMobileNumberErr(false);
    setPasswordErr(false);
  }

  function showPassword() {
    if (inputPassword === "password") {
      setInputPassword("text");
    } else {
      setInputPassword("password");
    }
  }

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function handleSubmit() {
    if (firstName === "") {
      setFirstNameErr(true);
    } else {
      setFirstNameErr(false);
    }
    if (lastName === "") {
      setLastNameErr(true);
    } else {
      setLastNameErr(false);
    }
    if (email === "") {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (age === "") {
      setAgeErr(true);
    } else {
      setAgeErr(false);
    }
    if (mobileNumber === "") {
      setMobileNumberErr(true);
    } else {
      setMobileNumberErr(false);
    }

    if (password === "" || password.length < 8) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
  }

  return (
    <div className="container text-center">
      <h1>Registration Form</h1>

      <form>
        <div className="form-group row">
          <label htmlFor="first name" className="col-sm-3 col-form-label">
            First name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="first name"
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
            />
            {firstNameErr && (
              <span className="text-danger">
                first name should not be empty
              </span>
            )}
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="last name" className="col-sm-3 col-form-label">
            Last name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="last name"
              value={lastName}
              onChange={event => setLastName(event.target.value)}
            />
            {lastNameErr && (
              <span className="text-danger">Last name should not be empty</span>
            )}
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="emailid" className="col-sm-3 col-form-label">
            Email id
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            {emailErr && (
              <span className="text-danger">enter valid email address</span>
            )}
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="age" className="col-sm-3 col-form-label">
            Age
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              placeholder="your age"
              value={age}
              onChange={event => setAge(event.target.value)}
            />
            {ageErr && (
              <span className="text-danger">age should not be empty</span>
            )}
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="mobile number" className="col-sm-3 col-form-label">
            Mobile number
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              placeholder="mobile number"
              value={mobileNumber}
              onChange={event => setMobileNumber(event.target.value)}
            />
            {mobileNumberErr && (
              <span className="text-danger">
                mobile number should not be empty{" "}
              </span>
            )}
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
            Password
          </label>
          <div className="col-sm-9">
            <input
              type={inputPassword}
              className="form-control"
              placeholder="Password"
              id="passcode"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            {passwordErr && (
              <span className="text-danger">password should be valid</span>
            )}
            <input type="checkbox" onClick={showPassword} />
            <span>show password</span>
          </div>
        </div>
      </form>
      <div>
        <button
          onClick={handleSubmit}
          type="button"
          className="btn btn-primary"
        >
          Sign Up
        </button>
        <button className="btn btn-warning" onClick={resetForm}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Signup;
