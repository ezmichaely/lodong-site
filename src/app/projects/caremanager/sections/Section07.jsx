import Image from "next/image"
import {
  caremanager07
} from '@/assets/images'
import styles from '../caremanager.module.css'

export default function Section06() {
  return (
    <section className={styles.sevenSection}>
      <div className={styles.sevenContainer}>
        <div className={styles.sevenTitle}>
          <h3>관련기사</h3>
        </div>

        <div className={styles.sevenImage}>
          <Image src={caremanager07} alt="caremanager07" />
        </div>
      </div>
    </section>
  )
}
