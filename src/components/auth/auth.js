import "./auth.css";
import { Link, useSearchParams } from "react-router-dom";
const Auth = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>{isLogin ? "Login" : "signup"}</h2>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Login" : "Create a user"}
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Auth;
