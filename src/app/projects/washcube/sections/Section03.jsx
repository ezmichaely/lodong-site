import Image from "next/image"
import {
  rugolf03,
} from '@/assets/images'
import styles from '../washcube.module.css'

export default function Section03() {
  return (
    <section className={styles.threeSection}>
        <div className={styles.threeContainer}>
          <div className={styles.threeImage}>
            <Image src={rugolf03} alt="rugolf03" />
          </div>

          <div className={styles.threeDetails}>
            <p>
              날짜, 작업 현황, 시간을 확인하고 <br />
              작업 가능한 직원에게 <span className="font-bold">배정</span>할 수 있습니다.
            </p>
          </div>
        </div>
      </section>
  )
}
