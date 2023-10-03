import Image from "next/image"
import {
  rugolf06,
} from '@/assets/images'
import styles from '../rugolf.module.css'

export default function Section06() {
  return (
    <section className={styles.sixSection}>
      <div className={styles.sixContainer}>
        <div className={styles.sixTitle}>
          <h3>WEB</h3>
        </div>

        <div className={styles.sixBottom}>
          <div className={styles.sixImage}>
            <Image src={rugolf06} alt="rugolf06"/>
          </div>

          <div className={styles.sixDetails}>
            <h4>설계</h4>
            <p>
              <span>예약정보를 웹사트로 불러와 </span>
              <span className="lg:font-bold">
                알림이 울리고
              </span> <br />
              <span className="lg:font-bold">카테고리 별로 예약현황</span>
              <span>을 알 수 있습니다.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
