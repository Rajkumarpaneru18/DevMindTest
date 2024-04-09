const HeroSection = () => {
  return (
    <div className=" py-12 px-4 flex items-center justify-between bg-black">
      <div className="py-12 px-4 flex items-center justify-between bg-black">
        <div className="justify-start">
          <div className="flex flex-col justify-center items-start gap-1 tracking-wider mr-24">
            <p className="text-3xl text-white">
              <span className="text-4xl font-bold">Unleash</span>
              <br />
              <span className="text-5xl font-bold text-orange-400">
                the Mystery
              </span>
              <br />
              <span className="text-5xl font-bold">
                Decode <span className=" text-orange-400">Random </span>Error
                Codes!
              </span>
            </p>
            <p className="text-xl text-gray-600 font-serif">
              Devmindtest is your gateway to sharpening coding prowess! Decode
              random error codes,
              <br></br> confront realistic coding hurdles, and receive instant
              feedback. Join our global community,
              <br /> compete, and conquer interactive quests to elevate your
              coding IQ!{" "}
            </p>
          </div>
        </div>
      </div>

      <div>
        <img
          className="object-cover rounded-lg shadow-lg"
          src="./src/assets/images/devthinking.png"
          alt="Hero Image"
          width="400"
          height="300"
        />
      </div>
    </div>
  );
};

export default HeroSection;
