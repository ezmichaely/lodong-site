import Image from "next/image"
import styles from './container.module.css';

export default function LeftContainer({ data }) {

  // console.log(data)
  return (
    <section className={`${styles.leftContainer}`}>
      <div className={`${styles.leftImgContainer}`}>
        <Image src={data.img} alt={data.title} className={`${styles.img}`} />
      </div>

      <div className={`${styles.detailsContainer}`}>
        <div className={`${styles.numTitle}`}>
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
    </section>
  )
}
