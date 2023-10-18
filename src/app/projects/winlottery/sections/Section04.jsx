import Image from "next/image"
import {
  winlottery04M,
  winlottery04D
} from '@/assets/images'
import styles from '../winlottery.module.css'

export default function Section04() {
  return (
    <section className={styles.fourSection}>
      <div className={styles.fourContainerMobile}>
        <div className={styles.fourImageMobile}>
          <Image src={winlottery04M} alt="winlottery04M" />
        </div>

        <div className={styles.fourDetailsMobile}>
          <p>
            포인트를 쌓아 명예의 전당에 올라보세요.
          </p>
        </div>
      </div>

      <div className={styles.fourContainerDesktop}>
        <div className={styles.fourImageDesktop}>
          <Image src={winlottery04D} alt="winlottery04D" />
        </div>

        <div className={styles.fourDetailsDesktop}>
          <p>
            <span>포인트를 쌓아 명예의 전당에 </span> <br />
            <span> 올라보세요. </span>
          </p>
        </div>
      </div>
    </section>
  )
}
