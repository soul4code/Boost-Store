import Link from "next/link";

const ButtonCardTemplateColor = ({action}) => {
  return (
    <Link href="/stages/2">
      <a onClick={action} className="button-color matchmaking__info-btn">
        Buy it now
      </a>
    </Link>
  );
};

export default ButtonCardTemplateColor;
