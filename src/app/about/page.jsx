import Footer from "@/components/Footer/Footer";
import { footerLinks } from "@/components/Data";

export const metadata = {
  title: 'Portfolio - About',
  description: 'The about page of my portfolio.',
}

export default function About() {
  return (
    <div>About
      <Footer links={footerLinks}/>
    </div>
  );
}
