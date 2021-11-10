import { useState } from "react";
import { connect } from "react-redux";
import { api } from "../../utils/api/api";
import ButtonGradient from "../common/ButtonGradient";
import InputWhiteBorder from "../common/InputWhiteBorder";
import ModalForm from "../common/ModalForm/ModalForm";
import { registrationPOST } from "./registrationPOST";
import { setAuth, setAuthToken } from "../../store/main/actions";


const Registration = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    console.log(`${email} - ${password}`);
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
  // alex@manc.ru - alexmanc

  return (
    <>
      <ModalForm
        title={"Registration"}
        titleButton={"Зарегистрироваться"}
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
        <ButtonGradient title={'Войти'} addClass={'modal__button'} action={() => registrationPOST(email, password)}/>

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

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
