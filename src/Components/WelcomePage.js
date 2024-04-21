import "../Styles/Welcomepage.css";
import { Link } from "react-router-dom";
function Welcome() {
  return (
    <div className="Background">
      <div className="container">
        <div>
          <h1>Welcome to PopX</h1>
        </div>
        <div>
          <p className="text">
            Lorem ipsum dolor sit amet,<br></br>consectetur adipiscing elit,
          </p>
        </div>
        <div className="buttonsection">
          <Link to="/sign">
            <button className="button-67">Create Account</button>
          </Link>
          <Link to="/login">
            <button className="button-67">Already Registered? Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
