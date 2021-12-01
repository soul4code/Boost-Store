import { useState } from "react";

const ModalForm = ({ title, description, children, onSubmitAction, close }) => {

  return (
    <>
      <div className={"modal__close"} onClick={close}>
        &#10006;
      </div>
      <div className={"modal__title matchmaking__title"}>{title}</div>
      <div className={"modal__description matchmaking__info-text"}>
        {description}
      </div>
      <form className={"modal__form"} onSubmit={(e) => onSubmitAction(e)}>
        {children}
      </form>
    </>
  );
};

export default ModalForm;
