import Image from "next/image"
import {
  aicity03Da1, aicity03Da2,
  aicity03Db1, aicity03Db2,
  aicity03Dc1, aicity03Dc2,
  aicity03Dd1, aicity03Dd2,
  aicity03M
} from '@/assets/images'
import styles from '../aicity.module.css'

export default function Section03() {
  return (
    <section className={styles.threeSection}>
      <div className={styles.threeContainer}>
        <div className={styles.threeTop}>
          <div className={styles.threeTop1}>
            <div className={styles.threeA}>
              <Image src={aicity03Da1} alt="aicity03Da1" />
              <p>인간중시형</p>
              <Image src={aicity03Da2} alt="aicity03Da2" />
              <p>인간중시형</p>
            </div>

            <div className={styles.threeB}>
              <Image src={aicity03Db1} alt="aicity03Db1" />
              <p>사회중시형</p>
              <Image src={aicity03Db2} alt="aicity03Db2" />
              <p>사회중시형</p>
            </div>
          </div>

          <div className={styles.threeTop2}>
            <p>
              <span>설문 결과에 따른 유형별 </span>
              <span className="font-bold">캐릭터를 부여</span>
              <span>해</span>
            </p>
            <p>서로 공유하며 같은 유형을 가진 사람들과</p>
            <p>
              <span className="font-bold">결속감을 느낄 수 있는 재미를 제공</span>
              <span>하였습니다.</span>
            </p>
          </div>

          <div className={styles.threeTop3}>
            <div className={styles.threeC}>
              <Image src={aicity03Dc1} alt="aicity03Dc1" />
              <p>사회중시형</p>
              <Image src={aicity03Dc2} alt="aicity03Dc2" />
              <p>사회중시형</p>
            </div>

            <div className={styles.threeD}>
              <Image src={aicity03Dd1} alt="aicity03Dd1" />
              <p>사회중시형</p>
              <Image src={aicity03Dd2} alt="aicity03Dd2" />
              <p>사회중시형</p>
            </div>
          </div>
        </div>

        <div className={styles.threeDetails}>
          <p>설문 결과에 따른 유형별 캐릭터를 부여해 서로 공유하며 같은 유형을 가진 사람들과 결속감을 느낄 수 있는 재미를 제공 하였습니다.</p>
        </div>
      </div>
    </section>
  )
}
