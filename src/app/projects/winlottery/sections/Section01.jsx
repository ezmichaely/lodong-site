import Image from "next/image"
import {
  winlottery01,
} from '@/assets/images'
import styles from '../winlottery.module.css'

export default function Section01() {
  return (
    <section className={styles.oneSection}>
      <div className={styles.oneContainer}>
        <div className={styles.oneImage}>
          <Image src={winlottery01} alt="winlottery01" />
        </div>

        <div className={styles.oneDetailsContainer}>
          <div className={styles.oneDetails}>
            <h3>내 꿈은 로또 1등</h3>
            <div>
              <p>
                그 날 꿨던 꿈을 입력하면 그에 해당하는 로또번호를 추출하는 서비스입니다. 과연 오늘 당신의 꿈은 어떤 행운의 번호를 가지고 올까요?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
