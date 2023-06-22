import { Nunito } from 'next/font/google';

import './globals.css'
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';

export const metadata = {
  title: 'iPlayed',
  description: "iPlayed is an innovative reservation system that not only simplifies the booking process for adventure games and interactive entertainment experiences but also adds an exciting gamification element to your journey. Earn achievement badges and level up your profile as you conquer thrilling activities like escape rooms, rage rooms, axe throwing, laser tag, and paintball. With iPlayed, you can easily reserve group-based adventures while unlocking a world of accomplishments. Immerse yourself in the thrill of the game, collect badges, and showcase your progress as you embark on unforgettable experiences. Start your gamified adventure with iPlayed today and let the achievements guide your path to victory.",
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
        <ClientOnly>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
       </ClientOnly>
        {children}
      </body>
    </html>
  )
}
