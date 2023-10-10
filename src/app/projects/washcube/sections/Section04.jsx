import Image from "next/image"
import {
  washcube04,
} from '@/assets/images'
import styles from '../washcube.module.css'

export default function Section04() {
  return (
      <section className={styles.fourSection}>
        <div className={styles.fourContainer}>
          <div className={styles.fourImage}>
            <Image src={washcube04} alt="washcube04"/>
          </div>

          <div className={styles.fourDetails}>
            <p>
              <span>키오스크의 진행 과정을 상세히 알려주어 </span> <br />
              <span>고객이 의문점을 가지게 하지 않습니다.</span>
            </p>
          </div>
        </div>
      </section>
  )
}
