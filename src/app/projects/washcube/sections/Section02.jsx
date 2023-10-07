import Image from "next/image"
import {
  washcube02,
} from '@/assets/images'
import styles from '../washcube.module.css'

export default function Section02() {
  return (
    <section className={styles.twoSection}>
      <div className={styles.twoContainer}>
        <div className={styles.twoTitle}>
          <h3>KIOSK</h3>
        </div>

        <div className={styles.twoBottom}>
          <div className={styles.twoImage}>
            <Image src={washcube02} alt="washcube02" />
          </div>


          <div className={styles.twoDetails}>
            <h4>설계</h4>
            <p>
              <span>운전자의 연령층이 다양하다는 것을 감안하여 </span> <br />
              <span className="lg:font-bold">간결한 UI</span>
              <span>로 </span>
              <span className="lg:font-bold">사용성</span>
              <span>을 높였습니다.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
