import Link from "next/link";

const CategoryItem = (props) => {

  return (
    <>
      <Link href={`/${props.currentGame}`}>
        <a className="game__rank-item">
          <p>{props.category}</p>
        </a>
      </Link>
    </>
  );
};

export default CategoryItem;
