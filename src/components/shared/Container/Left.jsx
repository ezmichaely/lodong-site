import Image from "next/image"
import styles from './container.module.css';

export default function LeftContainer({ data }) {

  // console.log(data)
  return (
    <section className={styles.leftContainer}>
      <div className={styles.leftImgContainer}>
        <Image src={data.img} alt={data.title} className={styles.leftImg} />
      </div>

      <div className={styles.leftDetailsContainer}>
        <div className={`${styles.leftNumTitle}`}>
          <h1 className={styles.leftNumber}>
            {data.number}
          </h1>

          <h4 className={styles.leftTitle}>
            {data.title}
          </h4>
        </div>

        <div className={`${styles.leftDetails}`}>
          <p>{data.details.one}</p>
          <p>{data.details.two}</p>
          {data.details.three && <p>{data.details.three}</p>}
        </div>
      </div>
    </section>
  )
}
