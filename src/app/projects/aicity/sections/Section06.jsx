import Image from "next/image"
import {
  aicity07,
} from '@/assets/images'
import styles from '../aicity.module.css'

export default function Section06() {
  return (
    <section className={styles.sixSection}>
      <div className={styles.sixContainer}>
        <div className={styles.sixDetails}>
          <p>
            <span className="lg:font-bold">관리자 페이지에서만 </span>
            <span>보이는 의견 </span> <br />
            <span>공유 페이지에서 각 문항마다 </span> <br />
            <span className="lg:font-bold">설문자들이 적은 의견을 볼 수 </span> <br />
            <span className="lg:font-bold">있</span>
            <span>습니다.</span>
          </p>
        </div>

        <div className={styles.sixImage}>
          <Image src={aicity07} alt="aicity07"/>
        </div>
      </div>
    </section>
  )
}
