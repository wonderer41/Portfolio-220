import Navbar from "@/components/Header/Navbar/Navbar";
import ThemeSwitcher from "@/components/Header/ThemeSwitcher/ThemeSwitcher";
import Introduction from "@/components/Introduction/Introduction";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget";
import WorkWidget from "@/components/WorkWidget/WorkWidget";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import Header from "@/components/Header/Header";
import { skills, work, navOptions, socialLinks, articleList } from "@/components/Data";

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

export default function Home() {
  return (
    <div className="flex flex-col px-4 pt-6 pb-16 lg:px-36 gap-6">
      <Introduction
        className="introduction"
        title={"Software engineer, wonderer, and lifelong learner"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.."
        }
        socialLinks={socialLinks}
      />
      <div className="body-container lg:flex flex-row flex-col justify-between sm:flex-row gap-6">
        <ArticleCard articleList={articleList} />
        <div className="h-8 lg;hidden" />
        <section className="widget-container flex flex-col gap-6">
          <SignupWidget
            title="Contact me"
            content="Whenever you want to know more about my projects and experiences."
          />
          <WorkWidget
            className="widget"
            title={"Work"}
            content={"Some of the places I've worked on."}
            experiences={work}
          />
          <SkillsWidget
            className="widget"
            title={"Skills"}
            content={"Some of the technologies I've worked with."}
            skills={skills}
          />
        </section>
      </div>
    </div>
  );
}
