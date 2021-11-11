// measure - мера измерения (%, $, р)

const Benefit = ({ sign, measure, price }) => {
  return (
    <div className="checkbox-benefit">
      {sign}
      {price}
      {measure}
    </div>
  );
};

export default Benefit;
