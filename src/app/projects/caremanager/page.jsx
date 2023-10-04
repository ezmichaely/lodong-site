
import {
  Hero,
  Section01, Section02,
  Section03, Section04,
  Section05, Section06,
  Section07
} from './sections'

import styles from "./caremanager.module.css"
import {
  ScrollTop,
  Breadcrumb,
} from "@/components"
import {
  title,
  details
} from '@/constants/project/caremanager'



export const metadata = {
  title: 'Care Manager - Project | Lodong',
  description: 'A Software Company that provide solutions, based in Gyeonggi-do, South Korea',
}

const page = () => {
  return (
    <main className={styles.main}>
      <Breadcrumb title={title} />
      <Hero details={details} />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      {/* <Section05 />
      <Section06 />
      <Section07 /> */}






      <ScrollTop />

    </main>
  )
}

export default page
