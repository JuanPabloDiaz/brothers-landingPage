// https://www.floatui.com/components/stats

import projectImg1 from "../assets/img/9-project295.png";
import projectImg2 from "../assets/img/10-project295.png";
import projectImg3 from "../assets/img/11-project295.png";
import projectImg4 from "../assets/img/12-project295.png";

const Projects = () => {
  const features = [
    {
      image: (
        <img src={projectImg1} className="rounded-lg" alt="phone project" />
      ),
    },
    {
      image: (
        <img src={projectImg2} className="rounded-lg" alt="dashboard project" />
      ),
    },
    {
      image: (
        <img src={projectImg3} className="rounded-lg" alt="banking project" />
      ),
    },
    {
      image: (
        <img
          src={projectImg4}
          className="rounded-lg"
          alt="white dashboard project"
        />
      ),
    },
  ];

  return (
    <section name="projects" className="pb-6 pt-24 sm:pb-6 md:pt-32">
      <div className="mx-auto max-w-screen-xl items-start justify-between gap-x-12 px-4 text-gray-600 md:px-8 lg:flex">
        <div className="hidden lg:block lg:max-w-xl">
          <div className="mt-6 flex-none md:mt-0 lg:mt-16">
            <ul className="inline-grid grid-cols-2 gap-x-14 gap-y-8">
              {features.map((item, idx) => (
                <li key={idx} className="flex gap-x-4">
                  <div className="flex h-40 w-64 flex-none items-center justify-center rounded-lg hover:scale-110 hover:border-gray-400 hover:shadow-lg hover:duration-150">
                    {item.image}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
          <div className="max-w-2xl">
            <h1>PROJECTS</h1>
            <h3 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
              Our amazing project that has been completed
            </h3>
            <p className="mt-3 max-w-xl text-justify">
              "Our remarkable project leveraged cutting-edge AI chatbot
              technology to enhance customer experiences, delivering natural
              language understanding, personalized recommendations, and seamless
              purchasing. It's a testament to our commitment to innovation and
              elevating customer interactions."
            </p>
            <p className="mt-3 max-w-xl text-justify">
              Our groundbreaking project marked a significant milestone in the
              realm of customer experience enhancement.
            </p>
          </div>
          <div>
            <button className="mt-12 rounded-lg bg-[#132577] px-7 py-4 text-white duration-150 hover:bg-[#13257798] active:shadow-lg md:mt-20">
              Recent Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
