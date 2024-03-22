import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio of Ajit Gurung',
  description: 'A seasoned .NET Developer with a proven track record in designing, developing, and maintaining high-performance software solutions. Proficient in C#, ASP.NET, .NET Core, SQL and other related technologies, with a keen eye for detail and a commitment to delivering quality results. Experienced in collaborating with cross-functional teams to ensure seamless integration and successful project outcomes. Passionate about coding and eager to tackle new challenges in a dynamic and innovative environment. Ready to leverage expertise and drive to contribute effectively to impactful projects.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
};
