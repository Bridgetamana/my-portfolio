import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const HeroSection = () => {
    return (
      <div className="max-w-screen-xl p-12 mx-auto lg:flex-row lg:items-center text-white justify-between flex flex-col items-center">
        <div className="border rounded-full h-[300px] w-[300px] md:h-[450px] md:w-[450px]">
          <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="" className="md:h-[450px] md:w-[450px] h-[300px] w-[300px]" />
        </div>
        <div className="mb-6 lg:order-first">
          <p className="mb-4 font-bold">Hello!</p>
          <h1 className="mb-4 font-bold text-4xl md:text-5xl">
            I am <span className="text-purple-300">Bridget Amana</span>
          </h1>
          <h2 href="#" className="text-base font-medium text-white italic mb-4">
            Frontend Developer
          </h2>
          <span className="flex">
            <a href="https://github.com/bridgetamana" className="text-xl md:text-3xl hover:text-purple-300">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/bridgetamana/" className="text-xl md:text-3xl hover:text-purple-300">
              <FaLinkedin className="ml-4" />
            </a>
            <a href="https://twitter.com/bridgetamana" className="text-xl md:text-3xl hover:text-purple-300">
              <FaTwitter className="ml-4" />
            </a>
          </span>
        </div>
      </div>
    );
  };

export default HeroSection