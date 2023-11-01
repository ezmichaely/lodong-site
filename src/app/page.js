import Image from 'next/image'
import Link from 'next/link'
import styles from './home.module.css';

import {
  CaretDownDark, CaretDownLight
} from '@/assets/images'

export const metadata = {
  title: 'Lodong',
  description: 'A Software Company that provide solutions, based in Gyeonggi-do, South Korea',
}

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <article className={styles.article1}>
          <div className={styles.article1Content}>
            <div className={styles.details1}>
              <p>
                <span>실패 경험</span>
                <span>ZERO</span>
              </p>
              <h4 className='lg:text-shadow2'>세상에 없던 디지털 솔루션 개발 전문</h4>
              <h1 className='text-shadowBlur lg:text-shadow'>LODONG</h1>
            </div>
          </div>
        </article>

        <article className={styles.article2}>
          <div className={styles.article2Content}>
            <div className={styles.details2}>
              <h3>We Develop Innovative </h3>
              <h3>
                <span>Digital Solutions</span>
                <span></span>
              </h3>
              <h3>
                <span>Enhancing User Experience</span>
                <span></span>
              </h3>
            </div>

            {/* caret */}
            <div className={styles.carets}>
              <Link href="/wework">
                <Image src={CaretDownDark} alt="CaretDownDark" />
              </Link>

              <Link href="/wework">
                <Image src={CaretDownLight} alt="CaretDownLight" />
              </Link>
            </div>

          </div>
        </article>
      </section>
    </main>
  )
}
