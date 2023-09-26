import Image from "next/image"
import styles from './heroKeflavik.module.css'

export default function Hero({details}) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroTop}>
          {/* image */}
          <div className={styles.heroImage}>
            {/* mobile */}
            <Image src={details.img.mobile} alt="mobile"
              className={styles.heroImageMobile} />

            {/* desktop */}
            <Image src={details.img.desktop} alt="desktop"
              className={styles.heroImageDesktop} />
          </div>

          {/* title */}
          <div className={styles.heroTitle}>
            <p>{details.title.p}</p>
            <h1>{details.title.h1}</h1>
          </div>
        </div>


        {/* details */}
        <div className={styles.heroDetailsContainer}>
          <div className={styles.heroDetails}>
            <p>
              <span> Client </span>
              <span> {details.details.client} </span>
            </p>

            <p>
              <span> Project Year </span>
              <span> {details.details.year} </span>
            </p>

            <p>
              <span> Duration </span>
              <span> {details.details.duration} </span>
            </p>

            <p>
              <span> Type of service </span>
              <span> {details.details.type} </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
