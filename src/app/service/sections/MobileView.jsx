"use client"
import { ServiceCircle } from '@/components'
import { serviceData } from "@/constants/pages/serviceData"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './mobileView.css'

export default function MobileView() {
  return (
    <section className="serviceCarousel">
      <Splide aria-label="Services Carousel"
        options={{
          rewind: true,
          rewindByDrag: true,
          arrows: false,
          width: '100vw',
          perPage: 1,
          focus: 'center',
        }}>
          {serviceData.map((data) => (
            <SplideSlide key={data.title}>
              <ServiceCircle data={data} />
            </SplideSlide>
          ))}
      </Splide>
    </section>
  )
}
