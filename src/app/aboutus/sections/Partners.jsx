import styles from './partners.module.css'
import Image from 'next/image'
import { partnersData } from '@/constants/pages/partnersData';
import Marquee from "react-fast-marquee";


export default function Partners() {
  return (
    <section className={styles.partners}>
      <div className={styles.title}>
        <h2>Partners</h2>
        <p>로동을 믿고 함께 해주셨습니다.</p>
      </div>

      <Marquee speed={80} className='my-10'>
        {partnersData.map((i) => (
          <div key={i.title} className='mx-10 select-none'>
            <Image src={i.src} alt={i.title} height={i.h} className='invert lg:filter-none' />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
