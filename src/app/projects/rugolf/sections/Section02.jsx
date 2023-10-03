import Image from "next/image"
import {
  rugolf02,
} from '@/assets/images'
import styles from '../rugolf.module.css'

export default function Section02() {
  return (
    <section className={styles.twoSection}>
      <div className={styles.twoContainer}>
        <div className={styles.twoTitle}>
          <h3>ANDROID</h3>
        </div>

        <div className={styles.twoBottom}>
          <div className={styles.twoImage}>
            <Image src={rugolf02} alt="rugolf02" />
          </div>

          <div className={styles.twoDetailsContainer}>
            <div className={styles.twoDetails1}>
              <p>스크린 골프 아카데미로 당일예약을 원칙으로 타석별, 강사별로 예약할 수 있는 서비스입니다. </p>
              <p>사용자가 원하는 시간에 예약하면 관리자용 웹으로 소리와 함께 알림이 떠 바로 확인이 가능합니다.</p>
            </div>
            <div className={styles.twoDetails2}>
              <h4>설계</h4>
              <div>
                <p>
                  <span className="font-bold">당일예약</span>
                  <span>으로 진행하며 </span>
                  <span className="font-bold">타석, 시간, 강사별</span>
                  <span>로 </span> <br />
                  <span>예약가능한 간편한 앱입니다.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
