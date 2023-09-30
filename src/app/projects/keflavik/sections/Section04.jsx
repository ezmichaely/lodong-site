import Image from "next/image"
import {
  keflavik04,
} from '@/assets/images'
import styles from '../keflavik.module.css'

export default function Section04() {
  return (
      <section className={styles.fourSection}>
        <div className={styles.fourContainer}>
          <div className={styles.fourImage}>
            <Image src={keflavik04} alt="keflavik04"/>
          </div>

          <div className={styles.fourDetails}>
            <p>
              <span className="font-bold">원하는 작업목록을 생성</span>
              <span>
                해 <br />
                사진을 업로드할 항목을 선택합니다.
              </span>
            </p>
          </div>
        </div>
      </section>
  )
}
