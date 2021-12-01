import Link from "next/link";

const CategoryItem = ({currentGame, category}) => {

  return (
    <>
      <Link href={`/${currentGame}`}>
        <a className="game__rank-item">
          <p>{category}</p>
        </a>
      </Link>
    </>
  );
};

export default CategoryItem;
