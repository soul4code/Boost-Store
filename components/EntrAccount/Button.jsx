const Button = ({ action, text, data }) => {
  return (
    <button className={"button-color-basic button__auth"} onClick={()=>action(data)}>
      {text}
    </button>
  );
};

export default Button;
