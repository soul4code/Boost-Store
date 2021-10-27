const Button = (props) => {
  return (
    <button
      className={"button-color-basic button__auth"}
      onClick={props.action}
    >
      {props.text}
    </button>
  );
};

export default Button;
