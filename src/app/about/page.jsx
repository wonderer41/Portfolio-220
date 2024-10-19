import Introduction from "@/components/Introduction/Introduction";
import PropTypes from "prop-types";
import Image from "next/image";

export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};

export default function About() {
  return (
    <div className="flex flex-col px-36 py-16 gap-6">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section - Text */}
        <div className="w-[464px]">
          <h1 className="text-3xl font-bold mb-4">I'm Jane. I live in New York City, where I develop the future.</h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem
            ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
          </p>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem
            ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
          </p>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem
            ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
          </p>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem
            ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
          </p>
        </div>

        {/*rigth side*/}
        <div className="flex-initial w-[464px] grid gap-3 shadow-168 rounded-xl h-auto overflow-hidden border border-gray-300">
          {/*big image*/}
          <div className="">
            <Image
              src="/about/aboutimage.jpeg"
              alt="Profile picture"
              className="w-full h-full object-cover"
              width={464}
              height={452}
            />
          </div>

          {/*links*/}
          <div className="p-6 text-center">
            {/*twitter*/}
            <a
              href="https://twitter.com"
              className="flex items-center justify-start mb-4 text-gray-700 hover:text-black"
            >
              <img src="/SocialLinks/twitter.svg" alt="Twitter" className="w-6 h-6 mr-2" />
              <span>Follow me on X</span>
            </a>

            {/*git*/}
            <a
              href="https://github.com"
              className="flex items-center justify-start mb-4 text-gray-700 hover:text-black"
            >
              <img src="/SocialLinks/github.svg" alt="Github" className="w-6 h-6 mr-2" />
              <span>Follow me on Github</span>
            </a>

            {/* Lknd*/}
            <a
              href="https://linkedin.com"
              className="flex items-center justify-start mb-4 text-gray-700 hover:text-black"
            >
              <img src="/SocialLinks/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mr-2" />
              <span>Follow me on LinkedIn</span>
            </a>

            {/*mail*/}
            <div className="flex  items-center justify-start text-gray-700">
              <img src="/SocialLinks/Mail.png" alt="Email" className="w-6 h-6 mr-2" />
              <span>jane@email.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
About.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};
