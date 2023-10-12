import Image from "next/image"
import {
  winlottery02M,
  winlottery02D,
} from '@/assets/images'
import styles from '../winlottery.module.css'

export default function Section02() {
  return (
    <section className={styles.twoSection}>
      <div className={styles.twoContainer}>
        <div className={styles.twoTitle}>
          <h3>APP</h3>
        </div>

        <div className={styles.twoBottom}>
          <div className={styles.twoImage}>
            <Image src={winlottery02M} alt="winlottery02M" />
            <Image src={winlottery02D} alt="winlottery02D" />
          </div>

          <div className={styles.twoDetailsContainer}>
            <div className={styles.twoDetails}>
              <h4>설계</h4>
              <div>
                <p>
                  <span>입력한 꿈의 내용에서 </span>
                  <span className="lg:font-bold">
                    키워드를 추출
                  </span>
                  <span>합니다.</span> <br />
                  <span className="lg:font-bold">
                    그 키워드에 해당하는 번호를 부여
                  </span>
                  <span>하고</span> <br />
                  <span>그것이 곧 로또 번호가 됩니다.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
