import BannerImage from "/src/assets/todobanner1.jpg";

function Banner() {
  return (
    <div className="w-full h-[15rem] relative">
      <img
        src={BannerImage}
        alt="Banner Background"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">A goal without a plan is just a wish!</h1>
          <h2 className="text-lg text-gray-200 mt-2">
            Have a Nice and Productive Day!
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
