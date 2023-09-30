import {
  Hero,
  Section01, Section02,
  Section03, Section04,
  Section05, Section06
} from './sections'

import styles from "./washcube.module.css"
import {
  rugolfMain, rugolfSub,
  rugolf01, rugolf02, rugolf03, rugolf04,
  rugolf05, rugolf06, rugolf07,
  rugolfMainMobile, rugolf01Mobile, rugolf02Mobile,
  rugolf03Mobile, rugolf06Mobile, rugolf07Mobile,
} from '@/assets/images2'

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
      <ScrollTop />
    </main>
  )
}

export default page
