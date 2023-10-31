import styles from './hero.module.css'
import { PinLocation } from '@/assets/images'
import Image from 'next/image'
import { companyInfo } from '@/constants/info'

export default function Hero() {
  return (
    <article className={styles.hero}>
      <div className={styles.topDiv}>

        <div className={styles.top1}>
          <h4>더 나은 사용자 경험과</h4>
          <h5>성공적인  IT개발을 향한 그 여정</h5>
        </div>

        <div className={styles.topBot}>
          <div className={styles.top2}>
            <div className={styles.title}>
              <h2>로동</h2>
              <p>이 함께 하겠습니다.</p>
            </div>
            <div className={styles.subTitle}>
              <p>더 나은 사용자 경험 (Better User experience)</p>
              <p>그리고 성공적인 IT개발을 향한 그 여정.</p>
            </div>
          </div>

          <div className={styles.top3}>
            <div className={styles.top3Content}>
              <div className={styles.top3A}>
                <p>
                  <span>오시는 길 :</span>
                  <span>{companyInfo.loc}</span>
                </p>
                <div className={styles.top3AImg}>
                  <Image src={PinLocation} alt="PinLocation"/>
                </div>
              </div>
              <div className={styles.top3B}>
                <p>
                  <span>TEL :</span>
                  <span>{companyInfo.tel}</span>
                </p>
                <p>
                  <span>FAX :</span>
                  <span>{companyInfo.fax}</span>
                </p>
                <p>
                  <span>Email :</span>
                  <span>{companyInfo.email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
