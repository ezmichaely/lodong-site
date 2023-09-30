import {
  Hero,
  // Section01, Section02,
  // Section03, Section04,
  // Section05, Section06
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

function Aicity() {
  return (
    <main className={styles.main}>
      <Breadcrumb title={title} />
      <Hero details={details} />

      <ScrollTop />
    </main>
  )
}

export default Aicity
