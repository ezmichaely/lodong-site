import Image from "next/image"
import {
  rugolf06D,
  rugolf06M
} from '@/assets/images'
import styles from '../rugolf.module.css'

export default function Section06() {
  return (
    <section className={styles.sixSection}>
      <div className={styles.sixContainer}>
        <div className={styles.sixTitle}>
          <h3>WEB</h3>
        </div>

        <div className={styles.sixImage}>
          <div className={styles.sixImageMobile}>
            <Image src={rugolf06M} alt="rugolf06M"/>
          </div>

          <div className={styles.sixImageDesktop}>
            <Image src={rugolf06D} alt="rugolf06D"/>
          </div>
        </div>

        <div className={styles.sixDetails}>
          <p>
            <span>구독 시작, 최근 결제일 등으로 </span> <br />
            <span className="font-bold">구독자를 관리</span>
            <span>하고 </span> <br />
            <span>더 나은 서비스를 제안합니다.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
