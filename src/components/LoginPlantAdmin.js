import React from 'react';
import './login.css';
import ReCAPTCHA from "react-google-recaptcha";
function onChange(value) {
  console.log("Captcha value:", value)
}

export default function LoginPlantAdmin() {
  return (
    <>
      <div className="text-center" >

        <main className="form-login w-300 m-auto">
          <form className="login-form">
            {/* <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
            {/* <h1 className="h3 mb-3 fw-normal">Plant Admin Sign Up</h1> */}

            <div className="form-floating">
              <input type="email" className="form-control" id="plantAdminEmail" placeholder="name@example.com" />
              <label htmlFor="plantAdminEmail">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="plantAdminPassword" placeholder="Password" />
              <label htmlFor="plantAdminPassword">Password</label>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <ReCAPTCHA sitekey="6LeAxjMiAAAAAEtqb7Tu6z83ShCeAZ106OD8bLaX" onChange={onChange} />
            </div>

            <div className="checkbox mb-3 mt-1">
              <label>
                <input type="checkbox" value="remember-me" /> Remember Me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>

          </form>
        </main>



      </div>
    </>
  )
}