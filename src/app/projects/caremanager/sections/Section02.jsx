import Image from "next/image"
import {
  caremanager02,
} from '@/assets/images'
import styles from '../caremanager.module.css'

export default function Section02() {
  return (
    <section className={styles.twoSection}>
      <div className={styles.twoContainer}>
        <div className={styles.twoImage}>
          <Image src={caremanager02} alt="caremanager02" />
        </div>

        <div className={styles.twoDetails}>
          <p>
            회원에 대한 정보를 리스트화하여 정리하였습니다.
          </p>
        </div>
      </div>
    </section>

  )
}
