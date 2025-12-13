import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import './globals.css'
import TopBar from './components/ui/layout/topbar'
import Navbar from './components/ui/layout/navbar'
import Footer from './components/ui/layout/Footer'

const instrumentSans = Instrument_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-sans',
})

export const metadata: Metadata = {
  title: 'Ecomprint',
  description: 'Ecomprint application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.className} bg-white`}>
        <TopBar />
        <Navbar />
        <main className="bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
