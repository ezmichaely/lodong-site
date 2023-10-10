import Image from "next/image"
import {
  washcube03,
} from '@/assets/images'
import styles from '../washcube.module.css'

export default function Section03() {
  return (
    <section className={styles.threeSection}>
        <div className={styles.threeContainer}>
          <div className={styles.threeImage}>
            <Image src={washcube03} alt="washcube03" />
          </div>

          <div className={styles.threeDetails}>
            <p>
              <span>간결한 결제 시스템으로 누구나 헤메지 않고</span> <br />
              <span>결제를 진행할 수 있습니다.</span>
            </p>
          </div>
        </div>
      </section>
  )
}
