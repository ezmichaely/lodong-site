import { inter, nanum, applesd } from '@/assets/fonts';
import './globals.css'
import type { Metadata } from 'next'
// import { pathname, router } from 'next/navigation';
import LightHeader from '@/components/Header/LightHeader';
import LightFooter from '@/components/Footer/LightFooter';

export const metadata: Metadata = {
  title: 'Lodong',
  description: 'A Software Company that provide solutions, based in Gyeonggi-do, South Korea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${applesd.variable} ${inter.variable} ${nanum.variable}`}>
      <body>
        <LightHeader />
        {children}
        <LightFooter />
      </body>
    </html>
  )
}
