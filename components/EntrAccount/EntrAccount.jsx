import { useState } from "react";
import Authorisation from "../Authorisation/Authorisation";
import Registration from "../Registration/Registration";
import Button from "./Button";

const EntrAccount = (props) => {
  const [typeEntr, setTypeEntr] = useState("");

  const getTypeEntrAuth = () => {
    setTypeEntr("auth");
  };

  const getTypeEntrReg = () => {
    setTypeEntr("reg");
  };

  const removeCurrentType = ()=>{
    setTypeEntr('')
  }

  const typeForm = () => {
    switch (typeEntr) {
      case "auth":
        return <Authorisation getUnVisible={props.getIsAuthorisationOpen} removeCurrentType={removeCurrentType}/>;

      case "reg":
        return <Registration getUnVisible={props.getIsAuthorisationOpen} removeCurrentType={removeCurrentType}/>;

      default:
        return null;
    }
  };

  return (
    <>
      <div
        className={`modal__wrapper ${
          props.isAuthorisationOpen
            ? "modal__wrapper-open"
            : ""
        }`}
      >
        <div className={"modal__body"}>
        <div className={"modal__close"} onClick={props.getIsAuthorisationOpen}>&#10006;</div>
          {!typeEntr ? (
            <div className={`account__header-entr`}>
              <Button text="Registration" action={getTypeEntrReg} />
              <Button text="Authorisation" action={getTypeEntrAuth} />
            </div>
          ) : (
            typeForm()
          )}
        </div>
      </div>
    </>
  );
};
export default EntrAccount;
