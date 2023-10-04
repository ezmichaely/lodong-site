import Link from "next/link"
import { PiCaretRightBold } from 'react-icons/pi'
import Image from "next/image"
import {
  ArrowLeft
} from '@/assets/images'
import styles from './breadcrumb.module.css'
// i

export default function Breadcrumb({title}) {
  return (
    <section className={styles.breadcrumbSection}>
      <div className={styles.breadcrumbContainer}>
        <Link href='/projects'>
          <Image src={ArrowLeft} alt="arrow" />
        </Link>

        <div className={styles.breadcrumbContentRight}>
          <Link href='/projects'> Projects </Link>
          <PiCaretRightBold />
          <h6> {title} </h6>
        </div>
      </div>
    </section>
  )
}
