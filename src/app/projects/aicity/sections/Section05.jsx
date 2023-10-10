import Image from "next/image"
import {
  aicity05,
} from '@/assets/images'
import styles from '../aicity.module.css'

export default function Section05() {
  return (
    <section className={styles.fiveSection}>
      <div className={styles.fiveContainer}>
        <div className={styles.fiveImage}>
          <Image src={aicity05} alt="aicity05"/>
        </div>
        <div className={styles.fiveDetailsContainer}>
          <div className={styles.fiveDetails}>
            <p>
              각 문항마다 생각나는 자신의 의견을 기입하여 AI에 대해 평소에 어떻게 생각하는지 공유할 수 있습니다.
            </p>
            <p>
              각 문항 상황에 맞는 삽화를 추가하여 설문조사의 이해를 도왔습니다.
            </p>
            <p>
              <span className="font-bold">각 문항마다 생각나는 자신의 의견을</span> <br />
              <span className="font-bold">기입</span>
              <span>하여 AI에 대해 평소에 </span> <br />
              <span>어떻게 생각하는지 공유할 수 있습니다.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
