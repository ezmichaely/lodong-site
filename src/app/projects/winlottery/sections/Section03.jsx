import Image from "next/image"
import {
  winlottery03,
} from '@/assets/images'
import styles from '../winlottery.module.css'

export default function Section03() {
  return (
    <section className={styles.threeSection}>
      <div className={styles.threeContainer}>

        <div className={styles.threeTopCircles}>
          <div className={styles.threeTopCircleDiv1}>
            <div className={styles.threeTopCircle1}>
              <p>44</p>
            </div>
          </div>

          <div className={styles.threeTopCircleDiv2}>
            <div className={styles.threeTopCircle2}>
              <p>7</p>
            </div>
          </div>

          <div className={styles.threeTopCircleDiv3}>
            <div className={styles.threeTopCircle3}>
              <p>10</p>
            </div>
          </div>
        </div>

        <div className={styles.threeMiddle}>
          <div className={styles.threeImage}>
            <Image src={winlottery03} alt="winlottery03" />
          </div>

          <div className={styles.threeDetails}>
            <p>
              <span>조합된 번호의 </span>
              <span className="lg:font-bold">
                당첨 여부를 바로 확인
              </span>
              <span>해보세요.</span> <br />
              <span>
                과거 어떤 번호가 추출되었는지 기록되어있습니다.
              </span>
            </p>
          </div>

          <div className={styles.threeBottomCircles}>
            <div className={styles.threeBottomCircle1}>
              <p>10</p>
            </div>
            <div className={styles.threeBottomCircle2}>
              <p>7</p>
            </div>
            <div className={styles.threeBottomCircle3}>
              <p>15</p>
            </div>
            <div className={styles.threeBottomCircle4}>
              <p>44</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
