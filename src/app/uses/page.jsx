import Footer from '@/components/Footer/Footer';
import { footerLinks } from '@/components/Data';

export const metadata = {
  title: 'Portfolio - Uses',
  description: 'The uses page of my portfolio.',
}

export default function Uses() {
  return (
    <div>Uses
      <Footer links={footerLinks}/>
    </div>
  );
}
