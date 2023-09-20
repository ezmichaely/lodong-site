import Image from "next/image"
import styles from './container.module.css';

export default function FirstContainer({ data, extra }) {
  return (
    <section className={`${styles.firstContainer}`}>
      <div className={`${styles.firstImgContainer}`}>
        <Image src={data.img} alt={data.title} className={`${styles.img}`} />
      </div>

      <div className={`${styles.firstDetailsContainer}`}>
        <div className={`${styles.firstTopDetailsContainer}`}>
          <p className="tracking-tighter space-x-2 3xl:space-x-4">
            <span className={`${styles.firstTopName}`}>
              {extra.name}
            </span>
            <span className={`${styles.firstTopDetails}`}>
              {extra.detail}
            </span>
          </p>
          <h1 className={`${styles.firstTopTitle}`}>
            {extra.title}
          </h1>
        </div>


        <div className={`${styles.firstBottomDetailsContainer}`}>
          <div className={`${styles.firstBottomNumTitle}`}>
            <h1 className={`${styles.number}`}>
              {data.number}
            </h1>

            <h4 className={`${styles.title}`}>
              {data.title}
            </h4>
          </div>

          <div className={`${styles.details}`}>
            <p>{data.details.one}</p>
            <p>{data.details.two}</p>
            {data.details.three && <p>{data.details.three}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}

