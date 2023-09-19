import Image from "next/image"
import styles from './container.module.css';

export default function Right({ data }) {
  return (
    <section className={styles.rightContainer}>
      <div className={styles.rightImgContainer}>
        <Image src={data.img} alt={data.title} className={styles.rightImg} />
      </div>

      <div className={styles.rightDetailsContainer}>
        <div className={`${styles.rightNumTitle}`}>
          <h1 className={styles.rightNumber}>
            {data.number}
          </h1>

          <h4 className={styles.rightTitle}>
            {data.title}
          </h4>
        </div>

        <div className={`${styles.rightDetails}`}>
          <p>{data.details.one}</p>
          <p>{data.details.two}</p>
          {data.details.three && <p>{data.details.three}</p>}
        </div>
      </div>
    </section>
  )
}
