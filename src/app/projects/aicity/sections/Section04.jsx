import Image from "next/image"
import {
  aicity04,
} from '@/assets/images'
import styles from '../aicity.module.css'

export default function Section04() {
  return (
    <section className={styles.fourSection}>
        <div className={styles.fourContainer}>
          <div className={styles.fourImage}>
            <Image src={aicity04} alt="aicity04" />
          </div>

          <div className={styles.fourDetails}>
            <p>
              <span>설문자의 조건을 조회하여 해당 </span> <br />
              <span className="lg:font-bold">설문자들의 통계를 확인</span>
              <span>할 수 있습니다.</span>
            </p>
          </div>
        </div>
      </section>
  )
}
