import Image from "next/image"
import styles from '../rugolf.module.css'

export default function Section01() {
  return (
    <section className={styles.oneSection}>
      <div className={styles.oneContainer}>
        <div className={styles.oneDetailsContainer}>
          <div className={styles.oneDetails}>
            <h3>RU GOLF</h3>
            <div>
              <p>
                스크린 골프 아카데미로 당일예약을 원칙으로 타석별, 강사별로 예약할 수 있는 서비스입니다.
              </p>
              <p>
                사용자가 원하는 시간에 예약하면 관리자용 웹으로 소리와 함께 알림이 떠 바로 확인이 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
