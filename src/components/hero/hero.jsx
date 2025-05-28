import bacp from "../../assets/qualification-bacp.png";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-stone-50 xl:h-[450px]">
        <div className="flex flex-col gap-2 p-10 justify-center items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl playfair-font">Allison Sara</h1>
          <p className="text-sm sm:text-base md:text-xl">BACP Qualified Counsellor</p>
          <p className="text-sm sm:text-base md:text-xl text-center">
            BSc Bachelor in Science Psychology and Health
          </p>

        </div>
        <div className="px-3 pb-10">
          <img src={bacp} className="w-20 sm:w-44 h-auto" alt="bacp logo" />
        </div>
      </div>
    </>
  );
};

export default Hero;
