import styles from './organization.module.css'
import Image from 'next/image'
import {
  orgChart
} from '@/assets/images'

export default function Organization() {
  return (
    <section className={styles.organization}>
      <div className={styles.title}>
        <h2>Organization</h2>
      </div>

      <div className={styles.orgChart}>
        <Image src={orgChart} alt="orgChart"/>
      </div>

      {/* <Marquee speed={80} className='my-10'>
        {partnersData.map((i) => (
          <div key={i.title} className='mx-10 select-none'>
            <Image src={i.src} alt={i.title} height={i.h} className='invert lg:filter-none' />
          </div>
        ))}
      </Marquee> */}
    </section>
  )
}
