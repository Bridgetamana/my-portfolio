import { IoMdCall, IoMdMail } from "react-icons/io";
const Footer = () => {
    return (
      <div className="text-white p-12">
        <div>
          <h1 className="mb-8 text-3xl font-extrabold text-center md:text-4xl text-white">
            Contact Me
          </h1>
          <div className="flex flex-col items-center gap-8">
            <span className="flex items-center space-x-4 border-b-2 rounded-md p-2 w-60">
              <IoMdCall className="text-xl md:text-3xl text-purple-300" />
              <a href="tel:+2349018183605">Call me</a>
            </span>
            <span className="flex items-center space-x-4 border-b-2 rounded-md p-2 w-60">
              <IoMdMail className="text-xl md:text-3xl text-purple-300" />
              <a href="mailto:amanabridget03@gmail.com">Send a message</a>
            </span>
          </div>
        </div>
        <div className="text-center py-8">
          <h1>©️ Bridget Amana, made with 💗 by Bridget Amana</h1>
        </div>
      </div>
    );
  };

export default Footer