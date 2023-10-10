import Image from "next/image"
import {
  aicity06a, aicity06b,
  aicity06c, aicity06d,
  aicity06e, aicity06f,
  aicity06g, aicity06h,
  aicity06i, aicity06j,
  aicity06k, aicity06l,

} from '@/assets/images'
import styles from '../aicity.module.css'

export default function SectionCards({ view }) {
  // console.log(view)
  return (
    <section className={`${view} ${styles.cardSection}`}>
      <div className={styles.cardContainer}>
        <div className={`${styles.cardDetails}`}>
          <p>
            <span>각 문항 상황에 맞는 삽화를 추가하여 </span>
            <span className="font-bold">설문조사의 이해를 도왔</span>
            <span>습니다.</span>
          </p>
        </div>

        <div className={styles.cardImageContainer}>
          <div className={styles.cardImage}>
            <Image src={aicity06a} alt="aicity06a" />
          </div>
          <div className={styles.cardImage}>
            <Image src={aicity06b} alt="aicity06b" />
           </div>
          <div className={styles.cardImage}>
            <Image src={aicity06c} alt="aicity06c" />
          </div>
          <div className={styles.cardImage}>
            <Image src={aicity06d} alt="aicity06d" />
          </div>
          <div className={styles.cardImage}>
            <Image src={aicity06e} alt="aicity06e" />
          </div>
          <div className={styles.cardImage}>
            <Image src={aicity06f} alt="aicity06f" />
          </div>
          <div className={styles.cardImage}>
            <Image src={aicity06g} alt="aicity06g" />
          </div>
          <div className={styles.cardImage}>
            <Image src={aicity06h} alt="aicity06h" />
          </div>
          <div className={styles.cardImage}>
            <Image src={aicity06i} alt="aicity06i" />
          </div>
          <div className={styles.cardImage}>
            <Image src={aicity06j} alt="aicity06j" />
          </div>
          <div className={styles.cardImage}>
            <Image src={aicity06k} alt="aicity06k" />
          </div>
          <div className={styles.cardImage}>
            <Image src={aicity06l} alt="aicity06l" />
          </div>
        </div>
      </div>

    </section>
  )
}
