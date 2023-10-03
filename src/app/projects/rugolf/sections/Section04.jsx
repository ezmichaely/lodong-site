import Image from "next/image"
import {
  rugolf04,
} from '@/assets/images'
import styles from '../rugolf.module.css'

export default function Section04() {
  return (
    <section className={styles.fourSection}>
      <div className={styles.fourContainer}>
        <div className={styles.fourImage}>
          <Image src={rugolf04} alt="rugolf04"/>
        </div>

        <div className={styles.fourDetails}>
          <p>
            <span>다양한 강사들에게 </span>
            <span className="lg:font-bold">
              레슨을 예약
            </span>
            <span className="lg:hidden">
              할 수 있습니다.
            </span>
            <span className="hidden lg:inline-flex">
              하고
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
