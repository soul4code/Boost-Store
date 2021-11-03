import { useState } from "react";
import { api } from "../../utils/api/api";
import { setAuth, setAuthToken } from "../../store/main/actions";
import { connect } from "react-redux";
import ModalForm from "../ModalForm/ModalForm";
import InputWhiteBorder from "../common/InputWhiteBorder";
import ButtonGradient from "../common/ButtonGradient";

const Authorisation = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .authorisation(email, password)
      .then((res) => {
        localStorage.setItem("authToken", res.token);
        console.log(res);
        return localStorage.getItem("authToken");
      })
      .then((res) => props.setAuthToken(res))
      .then(props.setAuth(true));
  };

  return (
    <>
      <ModalForm
        title={"Authorisation"}
        titleButton={"Войти"}
        onSubmitAction={handleSubmit}
        close={props.removeCurrentType}
      >
        <InputWhiteBorder
          placeholder={"email"}
          type={"email"}
          required={true}
          setValue={setEmail}
          minLength={3}
        />
        <InputWhiteBorder
          placeholder={"password"}
          type={"password"}
          required={true}
          setValue={setPassword}
          minLength={7}
        />
        <ButtonGradient
          title={"Войти"}
          addClass={"modal__button"}
          action={() => {
            api.authorisation(email, password);
            props.getUnVisible();
          }}
        />
      </ModalForm>
    </>
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
