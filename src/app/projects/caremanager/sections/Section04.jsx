import Image from "next/image"
import {
  caremanager04,
} from '@/assets/images'
import styles from '../caremanager.module.css'

export default function Section04() {
  return (
      <section className={styles.fourSection}>
        <div className={styles.fourContainer}>
          <div className={styles.fourImage}>
            <Image src={caremanager04} alt="caremanager04"/>
          </div>

          <div className={styles.fourDetails}>
            <p>
              <span>사용자가 버튼을 눌러 전화를 하면 </span>  <br />
              <span className="lg:font-bold">
                받는 사람에게 회원정보
              </span>
              <span>가 뜹니다.</span>
            </p>
          </div>
        </div>
      </section>
  )
}
