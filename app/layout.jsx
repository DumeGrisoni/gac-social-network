import './globals.css';
import { Noto_Sans } from 'next/font/google';
import Providers from './providers';
import Navbar from './Components/Navbar';

const Noto = Noto_Sans({ subsets: ['latin'], weight: ['500'] });

export const metadata = {
  title: 'Game Art Creators',
  description: 'Application pour les artistes 3D',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={Noto.className}>
        <Providers>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/6">
              <Navbar />
            </div>
            <div className="lg:w-5/6 mb-[60px]">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
