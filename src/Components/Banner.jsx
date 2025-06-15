import BannerImg from "../assets/learningImg.webp";
const Banner = () => {
  return (
    <div className="w-half mt-0 ">
      <img
        src={BannerImg} // mtor use require if it's in src/assets
        alt="Learning Support Banner"
        className="w-full h-64 object-cover shadow-md"
      />
    </div>
  );
};

export default Banner;
