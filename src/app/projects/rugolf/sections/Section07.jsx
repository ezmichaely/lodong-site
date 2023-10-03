import Image from "next/image"
import {
  rugolf07D, rugolf07M
} from '@/assets/images'
import styles from '../rugolf.module.css'

export default function Section07() {
  return (
    <section className={styles.sevenSection}>
      <div className={styles.sevenContainer}>
        <div className={styles.sevenImage}>
          <div className={styles.sevenImgMobile}>
            <Image src={rugolf07M} alt="rugolf07M"/>
          </div>
          <div className={styles.sevenImgDesktop}>
            <Image src={rugolf07D} alt="rugolf07D"/>
          </div>
        </div>

        <div className={styles.sevenDetails}>
          <h4>상호작용하는 웹/앱</h4>
          <p>
            앱에서 예약한 정보를 통해 웹에 알림이 뜹니다. <br />
            웹에서 예약 관리도 함께 할 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
