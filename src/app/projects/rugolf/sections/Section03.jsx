import Image from "next/image"
import {
  rugolf03, rugolf03a
} from '@/assets/images'
import styles from '../rugolf.module.css'

export default function Section03() {
  return (
    <section className={styles.threeSection}>
      <div className={styles.threeContainer}>
        <div className={styles.threeImage1}>
          <Image src={rugolf03} alt="rugolf03" />
        </div>

        <div className={styles.threeDetails}>
          <p>
            내정보에서 예약목록들을 확인하고 레슨과 예약을 관리해보세요.
          </p>
        </div>

        <div className={styles.threeImage2}>
          <Image src={rugolf03a} alt="rugolf03a" />
        </div>


      </div>
    </section>
  )
}
