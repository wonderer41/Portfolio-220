import SkillsWidget from "@/components/SkillsWidget/SkillsWidget";
import WorkWidget from "@/components/WorkWidget/WorkWidget";
import Footer from "@/components/Footer/Footer";
import { footerLinks, skills, work } from "@/components/Data";

export const metadata = {
  title: 'Portfolio - Home',
  description: 'Home page of my portfolio.',
}

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <SkillsWidget title={'Skills'}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'}
        skills={skills}/>
      <WorkWidget   title={'Work'}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'}
        experiences={work}/>
      <Footer links={footerLinks}/>
    </div>
  );
}
