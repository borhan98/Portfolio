import aboutMePhoto from "../../assets/Borhan2.png";

const About = () => {
  return (
    <div id="about" className="flex gap-4">
      <div className="w-1/3 border-r border-[#43A656] ">
        <figure className="bg-[#c4fed0] flex justify-center">
          <img className="h-80" src={aboutMePhoto} alt="Photo" />
        </figure>
      </div>
      <div className="w-2/3 py-6">
        <h3 className="text-3xl font-semibold text-zinc-600 mb-4">About me</h3>
        <p>
          Hello there, I&#39;m Borhan Uddin, a professional Front-End Web
          Developer. My core skill based on JavaScript. I love to learn most of the things with JavaScript. Currently I&#39;m working on React. I always interested in learning new JavaScript libraries and Frameworks and implementing them in new projects.
        </p>
      </div>
    </div>
  );
};

export default About;
