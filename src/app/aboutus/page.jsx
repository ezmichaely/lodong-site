import { About, Organization, Partners } from './sections'
import {
  ScrollTop
} from '@/components/index'

export const metadata = {
  title: 'About us | Lodong',
  description: 'A Software Company that provide solutions, based in Gyeonggi-do, South Korea',
}

export default function AboutUs() {
  return (
    <main className='bg-white lg:bg-black'>

      <Organization />
      <Partners />
      <ScrollTop />
    </main>
  )
}
