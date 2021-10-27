import { useState } from "react";
import Input from "../EntrAccount/Input";
import { api } from "../../utils/api/api";
import { setAuth, setAuthToken } from "../../store/main/actions";
import { connect } from "react-redux";

const Authorisation = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    api.authorisation(email, password).then((res) => {
      localStorage.setItem("authToken", res.token)
      return localStorage.getItem('authToken')
    })
    .then(res=>props.setAuthToken(res))
    .then(props.setAuth(true))
  };

  return (
    <div>
      <div className={"account__header-name text-center"}>Authorisation</div>
      <form onSubmit={handleSubmit}>
        <Input
          value={email}
          setValue={setEmail}
          type="email"
          placeholder="Email"
          required={true}
          minLength={3}
        />
        <Input
          value={password}
          setValue={setPassword}
          type="password"
          placeholder="Password"
          required={true}
          minLength={7}
        />
        <button
          className={"button-color-basic button__auth"}
          onClick={() => api.authorisation(email, password)}
        >
          Authorisation
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.main.isAuth,
  authToken: state.main.authToken,
});

const mapDispatchToProps = {
  setAuth,
  setAuthToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(Authorisation);
