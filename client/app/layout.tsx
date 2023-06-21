import { Nunito } from 'next/font/google';

import './globals.css'
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
//import Modal from './components/modals/modal';
import RegisterModal from './components/modals/RegisterModal';

export const metadata = {
  title: 'iPlayed',
  description: 'Isn\'t it time you were rewarded for your achievements?',
}

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>

          <RegisterModal/>
        <Navbar />

        {children}
      </body>
    </html>
  )
}
