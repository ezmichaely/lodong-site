import Image from "next/image"
import {
  rugolf02,
} from '@/assets/images'
import styles from '../washcube.module.css'

export default function Section02() {
  return (
    <section className={styles.twoSection}>
      <div className={styles.twoContainer}>
        <div className={styles.twoTitle}>
          <h3>ANDROID</h3>
        </div>

        <div className={styles.twoBottom}>
          <div className={styles.twoDetailsContainer}>
            <div className={styles.twoDetails}>
              <h4>설계</h4>
              <div>
                <p>
                  대면으로 진행하는 계약과정과 각 시공사의 진행
                </p>
                <p>
                  <span>과정을 </span>
                  <span className="font-bold">어플</span>
                  <span>을 통해 </span>
                  <span className="font-bold">관리</span>
                  <span>할 수 있도록 설계했습니다. </span>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.twoImage}>
            <Image src={rugolf02} alt="rugolf02" />
          </div>


        </div>
      </div>
    </section>
  )
}
