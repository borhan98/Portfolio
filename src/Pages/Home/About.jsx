import aboutMePhoto from "../../assets/Borhan2.png";

const About = () => {
  return (
    <div id="about" className="flex gap-4 items-center pt-14 md:pt-28 pb-6">
      <div className="hidden md:block w-1/3 border-r border-[#43A656] ">
        <figure className="bg-[#c4fed0] flex justify-center">
          <img className="h-80" src={aboutMePhoto} alt="Photo" />
        </figure>
      </div>
      <div className="divider divider-horizontal">
        <div className="w-4 h-1 bg-zinc-300"></div>
      </div>
      <div className="w-2/3 py-4 md:py-6">
        <h3 className="text-xl md:text-3xl font-semibold text-zinc-600 mb-4">About me</h3>
        <p className="text-zinc-500 mb-4 text-sm md:text-base">
          Hello there, I&#39;m Borhan Uddin, a professional Front-End Web
          Developer. My core skill based on JavaScript. I love to learn most of
          the things with JavaScript. Currently I&#39;m working on React. I
          always interested in learning new JavaScript libraries and Frameworks
          and implementing them in new projects.
        </p>
        <p className="text-zinc-500 text-sm md:text-base">
          My goal is to contribute to the web development industry. Which will
          have a very important impact on this industry. I also want to work
          towards the development of the IT sector and very keenly trying to
          contribute to open source project.
        </p>
      </div>
    </div>
  );
};

export default About;
