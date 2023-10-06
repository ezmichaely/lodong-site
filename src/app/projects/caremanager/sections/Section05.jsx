import Image from "next/image"
import {
  caremanager01,
} from '@/assets/images'
import styles from '../caremanager.module.css'

export default function Section05() {
  return (
    <section className={styles.fiveSection}>
        <div className={styles.fiveContainer}>
          <div className={styles.fiveDetails}>
            <p>
              <span>회원에 대한 정보를 </span>
              <span className="font-bold">리스트화</span>
              <span>하여 </span> <br />
              <span>정리하였습니다.</span>
            </p>
          </div>
          <div className={styles.fiveImage}>
            <Image src={caremanager01} alt="caremanager01"/>
          </div>
        </div>
      </section>
  )
}
