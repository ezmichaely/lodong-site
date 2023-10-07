import {
  Hero,
  Section01, Section02,
  Section03, Section04,
} from './sections'

import styles from "./washcube.module.css"

import {
  ScrollTop,
  Breadcrumb,
} from "@/components"
import {
  title,
  details
} from '@/constants/project/washcube'



export const metadata = {
  title: 'WashCube - Project | Lodong',
  description: 'A Software Company that provide solutions, based in Gyeonggi-do, South Korea',
}



const page = () => {
  return (
    <main className={styles.main}>
      <Breadcrumb title={title} />
      <Hero details={details} />
      <Section01 />
      <Section02 />

      <ScrollTop />

    </main>
  )
}

export default page
