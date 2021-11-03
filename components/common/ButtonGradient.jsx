const ButtonGradient = ({ title, action, addClass = "" }) => {
  return (
    <button
      className={`button-color-basic ${addClass}`}
      onClick={action}
    >
      {title}
    </button>
  );
};

export default ButtonGradient;
