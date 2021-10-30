import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Virtual, Scrollbar } from "swiper";
import { setReviews } from "../../store/reviews/actions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { api } from "../../utils/api/api";
import ReviewItem from "../Review/ReviewItem";

const ReviewsSlider = (props) => {
  useEffect(() => {
    api
      .getReviews()
      .then((res) => {
        props.setReviews(res);
      })
      .catch((err) => {
        console.log(`Ошибка при получении отзывов ${err}`);
      });
  }, []);

  const reviewsList = props.reviews.map((review) => (
    <ReviewItem
      name={review.NAME}
      previewText={review.PREVIEW_TEXT}
      key={review.ID}
    />
  ));

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination,Virtual, Scrollbar]}
        scrollbar={{ draggable: true }}
        navigation
        spaceBetween={50}
        slidesPerView={3}
        cssMode={true}
        className={`review__swiper-container`}
        virtual
      >
        {reviewsList.map((review, index) => (
          <SwiperSlide
            className={`review__swiper-slide`}
            key={review}
            virtualIndex={index}
          >
            {review}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const mapStateToProps = (state) => ({
  reviews: state.reviews.reviews,
});

const mapDispatchToprops = {
  setReviews,
};

export default connect(mapStateToProps, mapDispatchToprops)(ReviewsSlider);
