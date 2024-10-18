import {Roboto} from 'next/font/google';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import {footerLinks, navOptions} from '@/components/Data';
import './globals.css';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <div className="bg-zinc-50 dark:bg-black lg:px-20 text-black dark:text-white`">
         <Header navOptions={navOptions}/>
        <main className="flex flex-col justify-between min-h-screen bg-white dark:bg-zinc-900 max-w-7xl mx-auto">
          {/*<div className="flex-grow">*/}
            {children}
          {/*</div>*/}
        </main>
        <Footer links={footerLinks}/>
      </div>
      </body>
  </html>
  );
}
