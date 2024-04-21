import "../Styles/Signup.css";
import RadioButtonComponent from "./Radiobutton";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="Background">
      <div className="container">
        <div>
          <h1>Create your PopX account</h1>
        </div>
        <br></br>
        <div className="fromsection">
          <div className="input-group">
            <label className="input-group__label" for="myInput">
              Full Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="myInput"
              className="input-group__input"
              placeholder="Enter full name"
            />
          </div>

          <div className="input-group">
            <label className="input-group__label" for="myInput">
              Phone number<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="myInput"
              className="input-group__input"
              placeholder="Enter phone number"
            />
          </div>
          <div className="input-group">
            <label className="input-group__label" for="myInput">
              Email address<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="myInput"
              className="input-group__input"
              placeholder="Enter email address"
            />
          </div>
          <div className="input-group">
            <label className="input-group__label" for="myInput">
              Password<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="myInput"
              className="input-group__input"
              placeholder="Enter password"
            />
          </div>
          <div className="input-group">
            <label className="input-group__label" for="myInput">
              Company name<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="myInput"
              className="input-group__input"
              placeholder="Enter compnay name"
            />
          </div>
          <div>
            <p>Are you an Agency?</p>

            <RadioButtonComponent />
          </div>

          <div>
            <Link to="/">
              <button
                style={{ width: "365px", height: "45px" }}
                className="button-67"
              >
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
