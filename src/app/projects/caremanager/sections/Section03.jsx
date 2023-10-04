import Image from "next/image"
import {
  caremanager03,
} from '@/assets/images'
import styles from '../caremanager.module.css'

export default function Section03() {
  return (
    <section className={styles.threeSection}>
      <div className={styles.threeContainer}>
        <div className={styles.threeTitle}>
          <h3>ANDROID</h3>
        </div>

        <div className={styles.threeBottom}>
          <div className={styles.threeImage}>
            <Image src={caremanager03} alt="caremanager03" />
          </div>

          <div className={styles.threeDetailsContainer}>
            <div className={styles.threeDetails}>
              <h4>설계</h4>
              <div>
                <p>
                  <span>전자기기가 익숙하지 않은 어르신들을 위해 </span>
                  <span className="lg:font-bold">간단하게</span> <br />
                  <span className="lg:font-bold">함축시킨 UI를 사용</span>
                  <span>하여 한 눈에 보이도록 설계했습니다.</span>
                </p>
              </div>
            </div>
          </div>




        </div>
      </div>
    </section>
  )
}
