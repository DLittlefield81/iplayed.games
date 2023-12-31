import Image from 'next/image'
import { Inter } from 'next/font/google'
import ClientOnly from './components/ClientOnly'
import Container from './components/Container'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

        <div className="pt-24
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8">
         Listings
        </div>

  )
}
