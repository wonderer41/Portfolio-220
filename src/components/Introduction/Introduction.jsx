import Image from "next/image";
import socialLinks from "../Data";

const Introduction = ({ title, content, socialLinks = [] }) => {
  return (
    <div className="introduction flex flex-col gap-6" width={672} height={384}>
      <Image
        src="/Introduction/profile.jpg"
        width={64}
        height={64}
        className="rounded-full border-2 border-inherit shadow-lg"
        alt="Profile picture"
      />
      <h1 className="w-[672px] h-[112px] font-roboto font-bold text-5xl leading-14">{title}</h1>
      <p className="w-[672px] h-[112px] font-roboto text-base leading-7">{content}</p>
      <ul className="flex flex-row gap-3">
        {socialLinks.map((socialLink, index) => (
          <li key={index}>
            <a href={socialLink.link} target="_blank" rel="noopener noreferrer">
              <Image src={socialLink.icon} width={24} height={24} alt="Social icon" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Introduction;
