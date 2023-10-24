"use client"
import styles from './partners.module.css'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import Image from 'next/image'
import { partnersData } from '@/constants/pages/partnersData';
export default function Partners() {
  const options = {
    arrows: false,
    pagination: false,
    type   : 'loop',
    drag: 'free',
    focus: 'center',
    // breakpoints: {
		// 	640: { perPage: 1 },
    //   720: { perPage: 2 },
    //   1024: { perPage: 3 },
    //   1280: { perPage: 4 },
    //   1920: { perPage: 5 },
    //   2560: { perPage: 6 },
    // },
    perPage: 4,
    gap: '3rem',
    autoScroll: { speed: 0.2, },
    autoplay: true,
  }
  return (
    <section className='w-screen max-w-screen-4xl mx-auto px-6 lg:px-14'>
      <div className={styles.title}>
        <h2>Partners</h2>
        <p>로동을 믿고 함께 해주셨습니다.</p>
      </div>


      <Splide
        options={options} hasTrack={ false }
        aria-label="partners"
        className='w-full'
      >
        {/* className={`h-[300px] flex justify-center items-center`} */}
        {/* <div> */}
          <SplideTrack>
            {partnersData.map((i) => (
              <SplideSlide key={i.title} >
                <Image src={i.src} alt={i.title} height={i.h} />
              </SplideSlide>
            ))}
          </SplideTrack>
        {/* </div> */}

      </Splide>
    </section>
  )
}
