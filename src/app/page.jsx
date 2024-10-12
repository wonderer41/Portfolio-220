import Navbar from "@/components/Navbar/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import Introduction from "@/components/Introduction/Introduction";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget";
import WorkWidget from "@/components/WorkWidget/WorkWidget";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import Footer from "@/components/Footer/Footer";
import { footerLinks, skills, work, navOptions, socialLinks, articleList } from "@/components/Data";

export const metadata = {
  title: 'Portfolio - Home',
  description: 'Home page of my portfolio.',
};

export default function Home() {
  return (
    <main>
      <div className="header">
        <Navbar options={navOptions}/>
        <ThemeSwitcher darkClassName={"dark"}/>
      </div>
        <Introduction className='introduction' title={'Hi, I&apos;m John Doe'} content={'Placeholder'} socialLinks={socialLinks}/>
      <div className='home-body'>
        <ArticleCard articleDetails={articleList} />
        <section className='widgets'>
          <SignupWidget className='widget-item' title={'Stay up to date'} content={'Get notified when I publish something new, and unsubscribe at any time'} />
          <WorkWidget   className='widget-item' title={'Work'}
            content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'}
            experiences={work}/>
          <SkillsWidget className='widget-item' title={'Skills'}
            content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'}
            skills={skills}/>
        </section>
      </div>
      <Footer className='footer' links={footerLinks}/>
    </main>
  );
}
