import {Link} from 'react-router-dom';

function Login() {
   
  return (
    <div className="Background">
      <div className="container">
        <div>
          <h1>Signin to your PopX account</h1>
        </div>
        <div>
          <p className="text">
            Lorem ipsum dolor sit amet,<br></br>consectetur adipiscing elit,
          </p>
        </div>
        <br></br>
        <div className="fromsection">
          <div className="input-group">
            <label className="input-group__label" for="myInput">
              Email Address<span style={{ color: "red" }}>*</span>
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
          <div>
          <Link to="/account">
          <button style={{width:'365px',height:'45px'}} className='button-67'>Login</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
