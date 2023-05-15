import ClientOnly from './components/ClientOnly';
import Models from './components/models/Models';
import RegisterModal from './components/models/RegisterModal';
import Navbar from './components/navbar/Navbar';
import ToasterProvider from './components/providers/ToasterProvider';
import './globals.css'
import { Nunito } from "next/font/google";

const font = Nunito({
  subsets: ["latin"],

});

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <RegisterModal/>
          <Navbar/>
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
