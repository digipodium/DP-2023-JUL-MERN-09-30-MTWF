import React from "react";

const Login = () => {
  return (
    <div>
      <div className="w-25">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center">Login Form</h3>
            <hr />

            <form>
              <label htmlFor="">Email Address</label>
              <input type="email" className="form-control mb-3" />

              <label htmlFor="">Password</label>
              <input type="password" className="form-control mb-3" />

              <button className="btn btn-primary w-100 mt-5">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
