import Image from "next/image"
import {
  washcube01,
} from '@/assets/images'
import styles from '../washcube.module.css'

export default function Section01() {
  return (
    <section className={styles.oneSection}>
      <div className={styles.oneContainer}>
        <div className={styles.oneImage}>
          <Image src={washcube01} alt="washcube01" />
          <p>현장 사용 이미지</p>
        </div>

        <div className={styles.oneDetails}>
          <h3>WASHCUBE</h3>
          <p>
            노브러쉬 셀프세차장으로 IT기술을 접목하여 인터넷을 통한 무인관리 시스템으로 편하게 세차장을 이용하고 관리할 수 있습니다.
          </p>
        </div>
      </div>
    </section>

  )
}
