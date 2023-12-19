const About = () => {
  return (
    <div className="text-white mx-auto flex flex-col items-center p-12">
      <h1 className="mb-2 text-xl font-bold md:text-3xl lg:text-4xl text-center text-white">
        About
      </h1>
      <p className="mb-2 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        ullam sunt tenetur magni rem perferendis, maiores tempora inventore
        maxime, possimus voluptates culpa, earum ipsum quisquam! Magnam eaque
        similique ipsum consectetur!.
      </p>
      <a
        href="#"
        className="px-5 py-3 text-base font-medium text-black bg-purple-300 rounded-lg cursor-pointer"
      >
        Download CV
      </a>
    </div>
  );
};
  
  export default About;
  