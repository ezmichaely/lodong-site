import '@/styles/globals.css'

import {
  inter, nanum,
  kumbh, applesd,
  roboto_slab,
  jacques
} from '@/assets/fonts';
import {
  Header,
  Footer
} from '@/components';


export default function RootLayout({ children }) {
  return (
    <html lang="en"
      className={
        ` ${applesd.variable} ${inter.variable}
          ${nanum.variable} ${kumbh.variable}
          ${roboto_slab.variable} ${jacques.variable}
        `} >

      <body>
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  )
}
