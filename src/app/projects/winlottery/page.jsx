import {
  Hero,
  Section01, Section02,
  Section03, Section04,
} from './sections'

import styles from "./winlottery.module.css"

import {
  ScrollTop,
  Breadcrumb,
} from "@/components"
import {
  title,
  details
} from '@/constants/project/winlottery'


export const metadata = {
  title: 'Win Lottery - Project | Lodong',
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



      <ScrollTop />
    </main>
  )
}

export default page
