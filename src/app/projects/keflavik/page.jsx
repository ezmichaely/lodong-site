import Image from "next/image"
import HeroKeflavik from './HeroKeflavik/HeroKeflavik'
import styles from "./keflavik.module.css"
import {
  keflavikMain, keflavikSub,
  keflavik01, keflavik02, keflavik03,
  keflavik04, keflavik05, keflavik06,
  keflavikMainMobile, keflavik01Mobile, keflavik05Mobile,
  keflavik06Mobile,
  keflavikMainMobile1,
} from '@/assets/images'

import {
  ScrollTop,
  Breadcrumb,
} from "@/components"
import {
  title,
  details
} from '@/constants/project/keflavik'

export const metadata = {
  title: 'Keflavik - Project | Lodong',
  description: 'A Software Company that provide solutions, based in Gyeonggi-do, South Korea',
}

export default function Keflavik() {


  return (
    <main className={styles.main}>
      <Breadcrumb title={title} />
      <HeroKeflavik details={details} />



      {/* section 1 */}
      <section className={styles.oneSection}>
        <div className={styles.oneContainer}>
          <div className={styles.oneImage}>
            <Image src={keflavik01Mobile} alt="keflavik01" />
          </div>

          <div className={styles.oneDetailsContainer}>
            <div className={styles.oneDetails}>
              <h3>케플라비크</h3>
              <div>
                <p>
                  오프라인 박람회와 함께 온라인박람회를 개최해 직접 박람회를 방문하지 않고 시공사 정보를 알아볼 수
                  있습니다.
                </p>
                <p>
                  종이계약서보다 번거롭지 않고 바로 기록이 남는 전자계약서로 편리한 계약시스템을 이용할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className={styles.twoSection}>
        <div className={styles.twoContainer}>
          <div className={styles.twoTitle}>
            <h3>ANDROID</h3>
          </div>

          <div className={styles.twoBottom}>
            <div className={styles.twoDetailsContainer}>
              <div className={styles.twoDetails}>
                <h4>설계</h4>
                <div>
                  <p>
                    대면으로 진행하는 계약과정과 각 시공사의 진행
                  </p>
                  <p>
                    <span>과정을 </span>
                    <span className="font-bold">어플</span>
                    <span>을 통해 </span>
                    <span className="font-bold">관리</span>
                    <span>할 수 있도록 설계했습니다. </span>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.twoImage}>
              <Image src={keflavikMain} alt="keflavik03" />
            </div>


          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className={styles.threeSection}>
        <div className={styles.threeContainer}>
          <div className={styles.threeImage}>
            <Image src={keflavik03} alt="keflavik03" />
          </div>

          <div className={styles.threeDetails}>
            <p>
              날짜, 작업 현황, 시간을 확인하고 <br />
              작업 가능한 직원에게 <span className="font-bold">배정</span>할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className={styles.fourSection}>
        <div className={styles.fourContainer}>
          <div className={styles.fourImage}>
            <Image src={keflavik04} alt="keflavik04"/>
          </div>

          <div className={styles.fourDetails}>
            <p>
              <span className="font-bold">원하는 작업목록을 생성</span>
              <span>
                해 <br />
                사진을 업로드할 항목을 선택합니다.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* section 5 */}
      <section className={styles.fiveSection}>
        <div className={styles.fiveContainer}>
          <div className={styles.fiveTitle}>
            <h3> WEB </h3>
          </div>

          <div className={styles.fiveBottom}>
            <div className={styles.fiveImage}>
              <Image src={keflavik05} alt="keflavik05"/>
            </div>

            <div className={styles.fiveDetails}>
              <h3> 설계 </h3>
              <p>
                <span>날짜별로 담당자를 체크해 </span> <br />
                <span>일정을 한번에 확인</span>
                <span>하고 </span> <br />
                <span>미지정된 작업을 파악</span>
                <span>합니다.</span>
              </p>
            </div>
          </div>

          <div className="w-full flex justify-start items-center flex-col">

          </div>

        </div>
      </section>

      {/* section 6 */}
      {/* <section className={styles.sixSection}>
        <div className={styles.sixContainer}>
          <div className={styles.sixImage}>
            <div className="circleContainer">
              <div className="circle"></div>
            </div>

            <div className="imgContainerMobile">
              <Image src={keflavik06Mobile} alt="keflavik06Mobile"/>
            </div>

            <div className="imgContainerDesktop">
              <Image src={keflavik06} alt="keflavik06"/>
            </div>
          </div>

          <div className={styles.sixDetails}>
            <p> 구독 시작, 최근 결제일 등으로 구독자를 관리하고 더 나은 서비스를 제안합니다. </p>
          </div>
        </div>
      </section> */}



      <ScrollTop />

    </main>
  )
}
