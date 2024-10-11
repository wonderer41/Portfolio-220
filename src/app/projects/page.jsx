import Footer from "@/components/Footer/Footer";
import { footerLinks } from "@/components/Data";

export const metadata = {
  title: 'Portfolio - Projects',
  description: 'The projects page of my portfolio.',
}

export default function Projects() {
  return (
    <div>Projects
      <Footer links={footerLinks}/>
    </div>
  );
}
