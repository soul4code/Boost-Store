import Image from "next/image";

// Image is layout='fill' so need wrapperClass which limits width and height, and position relative

const ArrRightLargeFat = ({ wrapperClass }) => {
  return (
    <div className={wrapperClass}>
      <Image src="/img/matchmaking/progress-arr.svg" alt="arr" layout="fill" />
    </div>
  );
};

export default ArrRightLargeFat;
