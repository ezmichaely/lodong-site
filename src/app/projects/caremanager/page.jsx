import Image from "next/image"
import HeroCaremanager from './HeroCaremanager/HeroCaremanager'
import styles from "./caremanager.module.css"
import {
  ScrollTop,
  Breadcrumb,
} from "@/components"
import {
  title,
  details
} from '@/constants/project/caremanager'
import {
  caremanagerMain, caremanagerSub,
  caremanager01, caremanager02, caremanager03,
  caremanager04, caremanager05, caremanager06,
  caremanagerMainMobile, caremanager01Mobile, caremanager05Mobile,
  caremanager06Mobile,
  caremanagerMainMobile1,
} from '@/assets/images'

export const metadata = {
  title: 'Care Management - Project | Lodong',
  description: 'A Software Company that provide solutions, based in Gyeonggi-do, South Korea',
}

const page = () => {
  return (
    <main className={styles.main}>
      <Breadcrumb title={title} />
      <HeroCaremanager details={details} />



      {/* section 1 */}
      <section className={styles.oneSection}>
        <div className={styles.oneContainer}>
          <div className={styles.oneImage}>
            <Image src={caremanager01Mobile} alt="caremanager01" />
          </div>

          <div className={styles.oneDetails}>
            <p>
              오프라인 박람회와 함께 온라인박람회를 개최해 직접 박람회를 방문하지 않고 시공사 정보를 알아볼 수
              있습니다.
            </p>
            <p>
              종이계약서보다 번거롭지 않고 바로 기록이 남는 전자계약서로 편리한 계약시스템을 이용할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className={styles.twoSection}>
        <div className={styles.twoContainer}>
          <div className={styles.twoImage}>
            <Image src={caremanager03} alt="caremanager03" />
          </div>

          <div className={styles.twoDetails}>
            <p> 날짜, 작업 현황, 시간을 확인하고 작업 가능한 직원에게 배정할 수 있습니다. </p>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className={styles.threeSection}>
        <div className={styles.threeContainer}>
          <div className={styles.threeImage}>
            <Image src={caremanager04} alt="caremanager04"/>
          </div>

          <div className={styles.threeDetails}>
            <p>
              원하는 작업목록을 생성해 사진을 업로드할 항목을 선택합니다.
            </p>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className={styles.fourSection}>
        <div className={styles.fourContainer}>
          <div className={styles.fourTitle}>
            <h3> WEB </h3>
          </div>


          <div className={styles.fourImage}>
            <Image src={caremanager05} alt="caremanager05"/>
          </div>

          <div className={styles.fourDetails}>
            <h3> 설계 </h3>
            <p>
              <span>날짜별로 담당자를 체크해 </span>
              <span>일정을 한번에 확인</span>
              <span>하고 </span>
              <span>미지정된 작업을 파악</span>
              <span>합니다.</span>
            </p>
          </div>

          <div className="w-full flex justify-start items-center flex-col">

          </div>

        </div>
      </section>

      {/* section 5 */}
      <section className={styles.fiveSection}>
        <div className={styles.fiveContainer}>
          <div className={styles.fiveImage}>
            <div className="circleContainer">
              <div className="circle"></div>
            </div>

            <div className="imgContainerMobile">
              <Image src={caremanager06Mobile} alt="caremanager06Mobile"/>
            </div>

            <div className="imgContainerDesktop">
              <Image src={caremanager06} alt="caremanager06"/>
            </div>
          </div>

          <div className={styles.fiveDetails}>
            <p> 구독 시작, 최근 결제일 등으로 구독자를 관리하고 더 나은 서비스를 제안합니다. </p>
          </div>
        </div>
      </section>



      <ScrollTop />

    </main>
  )
}

export default page
