import Introduction from "@/components/Introduction/Introduction";
import PropTypes from "prop-types";
import Image from "next/image";

export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};

export default function About({ title, content, socialLinks }) {
  return (
    <div>
      <div className="flex justify-start items- ">
        <Introduction />
      </div>
      <div>
        <Image
          src="/about/aboutimage.jpeg"
          width={464}
          height={452}
          className="w-113 h-110 float-left"
          alt="profile for about"
        />
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
