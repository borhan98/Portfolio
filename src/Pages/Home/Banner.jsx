import photo2 from "../../assets/Borhan2.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-2 lg:px-0 flex flex-col md:flex-row gap-4 md:items-center justify-evenly bg-[#ebedff] pt-14 md:pt-28 pb-6">
      <div className="order-2 md:order-1">
        <h4 className="text-zinc-500 font-semibold text-lg md:text-xl">
          Hello there, my name is
        </h4>
        <div className="w-12 h-1 bg-[#43A656] mt-2 mb-6"></div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-zinc-600 font-bold capitalize">
          Borhan uddin
        </h1>
        <p className="text-xl md:text-2xl font-bold text-zinc-500 mb-6 md:mb-12">
          A professional Front-End Developer
        </p>
        <a
          className="py-2 md:py-3 lg:py-5 px-4 md:px-5 lg:px-6 rounded-md font-bold text-[#43A656] border border-[#43A656] hover:bg-[#43A656] hover:text-white duration-300" href="#contact"
        >
          Contact me
        </a>
      </div>
      <div className="mt-10 order-1 md:order-2">
        <figure className="my_shadow mx-auto relative w-60 md:w-72 h-64 md:h-80 bg-[#ebedff] rounded-full">
          <img
            className="absolute bottom-0 h-80 md:h-[420px] w-auto rounded-full"
            src={photo2}
            alt=""
          />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
