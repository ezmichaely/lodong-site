import Image from "next/image"
import {
  keflavik01,
} from '@/assets/images'
import styles from '../keflavik.module.css'

export default function Section01() {
  return (
    <section className={styles.oneSection}>
      <div className={styles.oneContainer}>
        <div className={styles.oneImage}>
          <Image src={keflavik01} alt="keflavik01" />
        </div>

        <div className={styles.oneDetailsContainer}>
          <div className={styles.oneDetails}>
            <h3>케플라비크</h3>
            <div>
              <p>
                오프라인 박람회와 함께 온라인박람회를 개최해 직접 박람회를 방문하지 않고 시공사 정보를 알아볼 수
                있습니다.
              </p>
              <p>
                종이계약서보다 번거롭지 않고 바로 기록이 남는 전자계약서로 편리한 계약시스템을 이용할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
