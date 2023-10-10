import {
  Hero,
  Section01, Section02,
  Section03, Section04,
  Section05, Section06,
  Section07, SectionCards
} from './sections'

import styles from "./aicity.module.css"

import {
  ScrollTop,
  Breadcrumb,
} from "@/components"
import {
  title,
  details
} from '@/constants/project/aicity'


export const metadata = {
  title: 'AI City - Project | Lodong',
  description: 'A Software Company that provide solutions, based in Gyeonggi-do, South Korea',
}

export default function Aicity() {
  const mobileCard = 'block lg:hidden'
  const desktopCard = 'hidden lg:block';

  return (
    <main className={styles.main}>
      <Breadcrumb title={title} />
      <Hero details={details} />
      <Section01 />
      <Section02 />
      <SectionCards view={desktopCard} />

      <div className={styles.sec03_sec04}>
        <Section03 />
        <Section04 />
      </div>

      <Section05 />
      <SectionCards view={mobileCard} />
      <Section06 />

      <ScrollTop />
    </main>
  )
}


