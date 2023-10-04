
import {
  Hero,
  Section01, Section02,
  Section03, Section04,
  Section05, Section06,
  Section07, Section08
} from './sections'

import styles from "./rugolf.module.css"


import {
  ScrollTop,
  Breadcrumb,
} from "@/components"
import {
  title,
  details
} from '@/constants/project/rugolf'

export const metadata = {
  title: 'RU Golf - Project | Lodong',
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
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />

      <ScrollTop />
    </main>
  )
}

export default page
