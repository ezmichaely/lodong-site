import styles from "./keflavik.module.css"

import {
  Hero,
  Section01, Section02,
  Section03, Section04,
  Section05, Section06
} from './sections'

import {
  ScrollTop,
  Breadcrumb,
} from "@/components"

import {
  title,
  details
} from '@/constants/project/keflavik'

export const metadata = {
  title: 'Keflavik - Project | Lodong',
  description: 'A Software Company that provide solutions, based in Gyeonggi-do, South Korea',
}

export default function Keflavik() {


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
      <ScrollTop />
    </main>
  )
}
