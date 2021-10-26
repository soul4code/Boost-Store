import { useState } from "react";
import Authorisation from "../Authorisation/Authorisation";
import Registration from "../Registration/Registration";

const EntrAccount = (props) => {
  const [typeEntr, setTypeEntr] = useState("");

  const getTypeEntrAuth = () => {
    setTypeEntr("auth");
  };

  const getTypeEntrReg = () => {
    setTypeEntr("reg");
  };

  const typeForm = () => {
    switch (typeEntr) {
      case "auth":
        return <Authorisation />;

      case "reg":
        return <Registration />;

      default:
        return null;
    }
  };

  return (
    <>
      <div
        className={`account__header ${
          props.isAuthorisationOpen
            ? "select__wrap-list-react"
            : "select__wrap-list"
        }`}
      >
        {!typeEntr ? (
          <div className={`account__header-entr`}>
            <button
              className={"button-color-basic button__auth"}
              onClick={getTypeEntrReg}
            >
              Registration
            </button>
            <button
              className={"button-color-basic button__auth"}
              onClick={getTypeEntrAuth}
            >
              Authorisation
            </button>
          </div>
        ) : 
          typeForm()
        }
      </div>
    </>
  );
};
export default EntrAccount;
