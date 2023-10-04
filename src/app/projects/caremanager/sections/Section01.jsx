import Image from "next/image"
import {
  caremanager01,
} from '@/assets/images'
import styles from '../caremanager.module.css'

export default function Section01() {
  return (
    <section className={styles.oneSection}>
      <div className={styles.oneContainer}>
        <div className={styles.oneImage}>
          <Image src={caremanager01}
            alt="caremanager01" />
        </div>

        <div className={styles.oneDetailsContainer}>
          <div className={styles.oneDetails}>
            <h3>돌봄대장</h3>
            <div>
              <p>
                집에 거주하는 부모님이 필요로 하는 모든 서비스를 제공하는 지역사회통합돌봄 서비스입니다. 부모님이 살던
              </p>
              <p>
                곳에서, 편안한 노후를 보낼 수 있는 개인 맞춤형 노후지원서비스 돌봄대장입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
