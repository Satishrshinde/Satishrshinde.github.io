import React, { useState } from "react";

function Login() {
  const [emailid, setEmailid] = useState("");
  const [password, setPassWord] = useState("");
  const [emailidErr, setEmailidErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function handleSubmit() {
    if (emailid === "") {
      setEmailidErr(true);
    } else {
      setEmailidErr(false);
    }
    if (password === "") {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    const isValidEmail = validateEmail(emailid);
    if (!isValidEmail) {
      setEmailidErr(true);
    } else {
      setEmailidErr(false);
    }
  }

  return (
    <div className="container text-left">
      <h1>Log in</h1>
      <form>
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-3 col-form-label">
            Email
          </label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control-plaintext"
              placeholder="Emailid"
              value={emailid}
              onChange={event => setEmailid(event.target.value)}
            />
            {emailidErr && (
              <span className="text-danger text-left posAbsolute">
                Invalid email
              </span>
            )}
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label">
            Password
          </label>
          <div class="col-sm-9">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              value={password}
              onChange={event => setPassWord(event.target.value)}
            />
            {passwordErr && (
              <span className="text-danger text-left posAbsolute">
                invalid password
              </span>
            )}
          </div>
        </div>
      </form>
      <div className="text-center">
        <button className="btn btn-primary " onClick={handleSubmit}>
          Log In
        </button>
      </div>
    </div>
  );
}
export default Login;
