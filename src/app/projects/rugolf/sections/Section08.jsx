import Image from "next/image"
import {
  rugolf08,
} from '@/assets/images'
import styles from '../rugolf.module.css'

export default function Section08() {
  return (
    <section className={styles.eightSection}>
      <div className={styles.eightContainer}>
        <div className={styles.eightImage}>
          <Image src={rugolf08} alt="rugolf08"/>
        </div>

        <div className={styles.eightDetails}>
          <p>
            <span>타석, 시간별로 어떤 고객이 예약했는지 </span> <br />
            <span className="font-bold">
              정리해주는
            </span>
            <span>
              페이지를 구현했습니다.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
