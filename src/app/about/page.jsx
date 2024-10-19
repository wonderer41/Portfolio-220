import Introduction from "@/components/Introduction/Introduction";
import PropTypes from "prop-types";
import Image from "next/image";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};

export default function About() {
  return (
    <div className="flex flex-col md:flex-row justify-between p-8 ">
      <div className="md: w-1/2 mb-6 md:mb-0">
        <h1 className="font-roboto font-bold text-5xl">
          I’m Jane. I live in New York City, where I develop the future.
        </h1>
        <p className="font-roboto w-400 text-base mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, id exercitationem, amet fugiat facere, fugit
          quam nihil laboriosam alias officiis nam. Eos aperiam consequatur officiis ipsa est explicabo quis ipsam.
        </p>
        <p className="font-roboto w-400 text-base mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, id exercitationem, amet fugiat facere, fugit
          quam nihil laboriosam alias officiis nam. Eos aperiam consequatur officiis ipsa est explicabo quis ipsam.
        </p>
        <p className="font-roboto w-400 text-base mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, id exercitationem, amet fugiat facere, fugit
          quam nihil laboriosam alias officiis nam. Eos aperiam consequatur officiis ipsa est explicabo quis ipsam.
        </p>
        <p className={`${roboto.className} font-roboto w-400 text-base mb-6`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, id exercitationem, amet fugiat facere, fugit
          quam nihil laboriosam alias officiis nam. Eos aperiam consequatur officiis ipsa est explicabo quis ipsam.
        </p>
      </div>
      <div className="md:w-1/2 flex flex-col items-center">
        <Image src="/about/aboutimage.jpeg" width={464} height={452} className="" alt="profile for about" />
        <ul className="flex space-x-6">
          <li>
            <a href="http://www.w3.org/2000/svg"></a>
            <menulink src="public\SocialLinks\twitter.svg" alt="twitter" />
          </li>
          <li>
            <a href="http://www.w3.org/2000/svg"></a>
            <img src="public\SocialLinks\github.svg" alt="git" />
          </li>
          <li>
            <a href="http://www.w3.org/2000/svg"></a>
            <menulink src="public\SocialLinks\linkedin.svg" alt="linkedin" />
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <img src="public\SocialLinks\github.svg" alt="" />
        </li>
        <li>
          <img src="public\SocialLinks\linkedin.svg" alt="" />
        </li>
        <li></li>
      </ul>
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
