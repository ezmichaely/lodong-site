import Image from 'next/image'
import styles from '@/styles/home.module.css';

export const metadata = {
  title: 'Lodong',
  description: 'A Software Company that provide solutions, based in Gyeonggi-do, South Korea',
}

export default function Home() {
  return (
    <main className={styles._main}>
      <section className={styles._inner}>
        <article className={styles._hero}>
          <p className={styles._hero_info}>
            <span className={styles._hero_info1}>
              실패 경험
            </span>
            <span className={styles._hero_info2}>
              ZERO
            </span> <br />
            <span className={styles._hero_info3}>
              세상에 없던 디지털 솔루션 개발 전문
            </span>
          </p>
          <p className={styles._hero_lodong}>
            LODONG
          </p>
        </article>
      </section>
    </main>
  )
}
