import '@/styles/globals.css'

import {
  inter, nanum,
  kumbh, applesd,
  roboto_slab,
  jacques
} from '@/assets/fonts';
import { Header, Footer } from '@/components';


export default function RootLayout({ children }) {
  const htmlClass = ` ${applesd.variable} ${inter.variable}
          ${nanum.variable} ${kumbh.variable}
          ${roboto_slab.variable} ${jacques.variable}`

  return (
    <html lang="en" className={htmlClass}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
