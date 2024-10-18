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
  title: 'Portfolio - Home',
  description: 'Home page of my portfolio.',
};

export default function Home() {
  return (
    <div className='p-20'>
        <Introduction className='introduction' title={"Software engineer, father, and believer"} content={'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..'} socialLinks={socialLinks}/>
      <div className='body-container flex flex-row space-x-10 p-8'>
        <ArticleCard articleList={articleList} />
        <section className='widget-container' >
          <SignupWidget title="Stay up to date" content="Get notified when I publish something new, and unsubscribe at any time."/>
          <WorkWidget className='widget' title={'Work'}
            content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'}
            experiences={work}/>
          <SkillsWidget className='widget' title={'Skills'}
            content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'}
            skills={skills}/>
        </section>
      </div>
    </div>
  );
}
