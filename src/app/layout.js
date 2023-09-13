import '@/styles/globals.css'

import {
  inter, nanum,
  kumbh, applesd,
  roboto_slab,
  jacques
} from '@/assets/fonts';


export default function RootLayout({ children }) {
  return (
    <html lang="en"
      className={
        `${applesd.variable} ${inter.variable}
        ${nanum.variable} ${kumbh.variable} 
        ${roboto_slab.variable} ${jacques.variable}
        `} >

      <body>{children}</body>

    </html>
  )
}
