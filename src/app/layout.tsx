import './globals.css'
import { 
  inter, nanum, 
  kumbh, applesd, 
  roboto_slab,
  jacques 
} from '@/assets/fonts';


import Header from '@/components/shared/Header/Header';
import LightFooter from '@/components/shared/Footer/LightFooter';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" 
      className={`${applesd.variable} ${inter.variable} ${nanum.variable} ${kumbh.variable} ${roboto_slab.variable} ${jacques.variable}`} >
      <body>
        <Header />
        {children}
        <LightFooter />
      </body>
    </html>
  )
}
