import Image from "next/image"
import {
  rugolf05,
} from '@/assets/images'
import styles from '../rugolf.module.css'

export default function Section05() {
  return (
    <section className={styles.fiveSection}>
      <div className={styles.fiveContainer}>
        <div className={styles.fiveDetails}>
          <p>
            <span>내정보에서 예약목록들을 확인하고</span> <br />
            <span className="font-bold">레슨과 예약을 관리</span>
            <span>해보세요.</span>
          </p>
        </div>
        <div className={styles.fiveImage}>
          <Image src={rugolf05} alt="rugolf05"/>
        </div>
      </div>
    </section>
  )
}
