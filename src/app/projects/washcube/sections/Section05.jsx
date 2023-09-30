import Image from "next/image"
import {
  rugolf05,
} from '@/assets/images'
import styles from '../washcube.module.css'

export default function Section05() {
  return (
    <section className={styles.fiveSection}>
        <div className={styles.fiveContainer}>
          <div className={styles.fiveTitle}>
            <h3> WEB </h3>
          </div>

          <div className={styles.fiveBottom}>
            <div className={styles.fiveImage}>
              <Image src={rugolf05} alt="rugolf05"/>
            </div>

            <div className={styles.fiveDetails}>
              <h3> 설계 </h3>
              <p>
                <span>날짜별로 담당자를 체크해 </span> <br />
                <span className="font-bold">일정을 한번에 확인</span>
                <span>하고 </span> <br />
                <span className="font-bold">미지정된 작업을 파악</span>
                <span>합니다.</span>
              </p>
            </div>
          </div>

          <div className="w-full flex justify-start items-center flex-col">

          </div>

        </div>
      </section>
  )
}
