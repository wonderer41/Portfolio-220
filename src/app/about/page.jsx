import Introduction from "@/components/Introduction/Introduction";
import PropTypes from "prop-types";

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
        <img className="w-30 h-30" src="public\about\aboutimage.jpeg" alt="profile for about" />

        <div></div>
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
