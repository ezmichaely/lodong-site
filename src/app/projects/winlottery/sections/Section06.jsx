import Image from "next/image"
import {
  keflavik06M,
  keflavik06D,
} from '@/assets/images'
import styles from '../winlottery.module.css'

export default function Section06() {
  return (
    <section className={styles.sixSection}>
      <div className={styles.sixContainer}>
        <div className={styles.sixImage}>
          <div className={styles.sixCircleContainer}>
            <div className={styles.sixCircle}></div>
          </div>

          <div className={styles.sixImageMobile}>
            <Image src={keflavik06M} alt="keflavik06M"/>
          </div>

          <div className={styles.sixImageDesktop}>
            <Image src={keflavik06D} alt="keflavik06D"/>
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
