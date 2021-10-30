import Link from "next/link";
import { useRouter } from "next/router";
import ProductArrow from "../../public/img/icons/product-arrow.svg";

const Product = (props) => {

  const router = useRouter();
  
  return (
    <>
      <div className="product" key={props.card.ID}>
        <Link href={`${router.asPath}/${props.card.CODE}`}>
          <a>
            <div className="product__image-wrap">
              <img src={props.card.PREVIEW_PICTURE} className="product__image" />
            </div>
            <h2 className="product__title">{props.card.NAME}</h2>
          </a>
        </Link>

        <p className="product__description">{props.card.PREVIEW_TEXT}</p>
        <div className="product__price-term">
          <div className="product__price">From 10$</div>
          <div className="product__term">3-5 days</div>
        </div>
        <span className="product__separator"></span>
        <Link href="/">
          <a>
            <div className="product__more">
              <span className="product__more-price">22 000₽</span>
              <ProductArrow />
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Product;
