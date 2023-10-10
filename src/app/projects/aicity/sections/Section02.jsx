import Image from "next/image"
import {
  aicity02,
} from '@/assets/images'
import styles from '../aicity.module.css'

export default function Section02() {
  return (
    <section className={styles.twoSection}>
      <div className={styles.twoContainer}>
        <div className={styles.twoTitle}>
          <h3>WEB</h3>
        </div>


        <div className={styles.twoBottom}>
          <div className={styles.twoImage}>
            <Image src={aicity02} alt="aicity02" />
          </div>

          <div className={styles.twoDetailsContainer}>
            <div className={styles.twoDetails}>
              <h4>설계</h4>
              <div>
                <p>
                  AI를 도입함으로써 일어나는 다양한 상황들을 제시하고 그에 대해 찬성과 반대로 갈리는 설문조사입니다.
                </p>
                <p>
                  설문자가 AI에 대해 어떤 관점을 가지고 있는지 통계를 가져올 수 있습니다.
                </p>
                <p>
                  <span>다소 딱딱할 수 있는 AI라는 주제를 어린 연령대의 </span> <br />
                  <span>사용자가 좀 더 친근하게 다룰 수 있도록 </span>
                  <span className="lg:font-bold">전체적으로 </span> <br />
                  <span className="lg:font-bold">부드러운 색상을 활용하여 거부감을 줄였</span>
                  <span>습니다. </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
