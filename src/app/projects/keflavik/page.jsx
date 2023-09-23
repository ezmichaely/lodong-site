import Image from "next/image"
import Link from "next/link"
import styles from "./keflavik.module.css"
import {
  keflavikMain, keflavikSub,
  keflavik01, keflavik02, keflavik03,
  keflavik04, keflavik05, keflavik06,
  keflavikMainMobile, keflavik01Mobile, keflavik05Mobile,
  keflavik06Mobile,
  keflavikMainMobile1,
  ArrowLeft
} from '@/assets/images'
import { PiCaretRightBold } from 'react-icons/pi'
import ScrollTop from "@/components/shared/ScrollTop/ScrollTop"


export const metadata = {
  title: 'Keflavik - Project | Lodong',
  description: 'A Software Company that provide solutions, based in Gyeonggi-do, South Korea',
}

export default function Keflavik () {
  return (
    <main className="bg-black">
      {/* breadcrumb */}
      <section className="px-6 lg:px-14 w-full lg:hidden">
        <div className="flex justify-start items-center flex-row gap-x-6">
          <Link href='/projects'>
            <Image src={ArrowLeft} alt="arrow" />
          </Link>
          <div className="text-white flex justify-start items-center flex-row gap-x-3 ">
            <Link href='/projects'>
              <h4 className="tracking-tight text-white font-bold">
                Projects
              </h4>
            </Link>
            <PiCaretRightBold className="opacity-60" />
            <h6 className="tracking-tight opacity-60">케플라비크</h6>
          </div>
        </div>
      </section>

      {/* hero */}
      <section className="py-6">
        <div className="max-w-screen-4xl mx-auto w-screen px-0 lg:px-14 3xl:px-64 flex justify-center items-center flex-col lg:flex-row-reverse xl:gap-x-6 lg:justify-between h-auto">
          {/* image container */}
          <div className="h-540 w-full lg:w-fit pl-6 xs:pl-0 flex justify-start xs:justify-center py-[50px] lg:py-0 overflow-x-hidden">
            {/* mobile */}
            <Image src={keflavikMainMobile} alt="mobile"
              className="h-full object-cover sm:object-contain lg:hidden border" />

            {/* desktop */}
            <Image src={keflavik01} alt="desktop" className="h-full w-fit hidden lg:flex"/>
          </div>

          {/* title */}
          <div className="my-3 lg:my-0 py-8 lg:py-0 text-center lg:text-left">
            <p className="font-applesd text-keflavik tracking-tighter lg:text-xl">
              시공부터 결제까지 한 번에 해결 !
            </p>
            <h1 className="mt-4 text-5xl font-bold text-white lg:text-7xl">
              케플라비크
            </h1>
          </div>
        </div>

        {/* project duration */}
        <div className="px-6 lg:px-14 xl:px-20 3xl:px-64 my-3 py-4 lg:my-0 text-center flex justify-center items-center flex-wrap flex-row gap-x-8 lg:gap-x-12 2xl:gap-x-32 gap-y-3 text-white lg:text-black lg:bg-keflavik">

          <p className="space-x-5 tracking-tight text-lg">
            <span className="font-bold">
              Client
            </span>
            <span className="opacity-60 lg:opacity-100">
              케플라비크
            </span>
          </p>

          <p className="space-x-5 tracking-tight text-lg">
            <span className="font-bold">
              Project Year
            </span>
            <span className="opacity-60 lg:opacity-100">
              2022
            </span>
          </p>

          <p className="space-x-5 tracking-tight text-lg">
            <span className="font-bold">
              Duration
            </span>
            <span className="opacity-60 lg:opacity-100">
              6개월 소요
            </span>
          </p>

          <p className="space-x-5 tracking-tight text-lg">
            <span className="font-bold">
              Type of service
            </span>
            <span className="opacity-60 lg:opacity-100">
              Android app / Web
            </span>
          </p>
        </div>
      </section>

      {/* section 1 */}
      <section className="mt-24 text-white max-w-screen-4xl mx-auto w-screen px-6 lg:px-14">
        <div className="h-[460px] w-full flex justify-center items-center">
          <Image src={keflavik01Mobile} alt="keflavik01" className="h-full min-w-fit w-fit" />
          {/* h-full w-[319px] border */}
        </div>

        <div className="w-full font-applesd mt-12 space-y-4 text-lg leading-10 opacity-60">
          <p>
            오프라인 박람회와 함께 온라인박람회를 개최해 직접 박람회를 방문하지 않고 시공사 정보를 알아볼 수
            있습니다.
          </p>
          <p>
            종이계약서보다 번거롭지 않고 바로 기록이 남는 전자계약서로 편리한 계약시스템을 이용할 수 있습니다.
          </p>
        </div>
      </section>

      {/* section 2 */}
      <section className="mt-40 text-white
        max-w-screen-4xl mx-auto w-screen px-6 lg:px-14 ">
        <div className="w-full flex justify-start items-center flex-col border border-lime-600">
          <div className="h-[640px] w-full flex justify-center items-center">
            <Image src={keflavik03} alt="keflavik03" className="h-full object-contain" />
          </div>

          <div className="w-full font-applesd mt-12 text-lg leading-10 opacity-60 ">
            <p>
              날짜, 작업 현황, 시간을 확인하고 작업 가능한 직원에게 배정할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="mt-40 text-white
        max-w-screen-4xl mx-auto w-screen ">
        <div className="px-0 lg:px-14 w-full flex justify-start items-center flex-col ">
          <div className="h-[540px] w-full flex justify-center items-center ">
            <Image src={keflavik04} alt="keflavik04" className="h-full min-w-fit w-fit " />
          </div>

          <div className="px-6 lg:px-0 w-full font-applesd mt-12 space-y-4 text-lg leading-10 opacity-60 ">
            <p>
              원하는 작업목록을 생성해 사진을 업로드할 항목을 선택합니다.
            </p>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className="mt-40 text-white">
        <div className="w-full flex justify-start items-center flex-col">
          <h3 className="max-w-screen-4xl mx-auto w-screen px-6 lg:px-14 font-applesd text-3xl font-bold mb-36 ">
            WEB
          </h3>

          <div className="w-full flex justify-start items-center flex-col">
            <div className="w-full flex justify-center items-center flex-col">
              <Image src={keflavik05} alt="keflavik04" className="w-fit scale-125 sm:scale-100"/>
            </div>

            <div className="max-w-screen-4xl mx-auto w-screen px-6 lg:px-14 mt-24 space-y-8 text-lg leading-10 ">
              <h3 className="font-applesd text-2xl">
                설계
              </h3>
              <p className="opacity-60">
                <span>날짜별로 담당자를 체크해 </span>
                <span className="font-bold">일정을 한번에 확인</span>
                <span>하고 </span>
                <span className="font-bold">미지정된 작업을 파악</span>
                <span>합니다.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 5 */}
      <section className="mt-40 text-white">
        <div className="w-full flex justify-start items-center flex-col lg:flex-row lg:max-w-screen-4xl lg:mx-auto lg:w-screen  border lg:gap-x-16 lg:items-start sm:px-6 lg:px-14 3xl:px-64">

          {/* images */}
          <div className="w-full lg:w-fit relative border border-red-500">
            {/* flex justify-start items-center flex-col lg:flex-row-reverse lg:justify-center */}
            <div className="relative flex justify-end items-center
            lg:hidden
            lg:absolute
            lg:left-[-25px] lg:bottom-[-50px]
            xl:left-[-50px] xl:bottom-[-50px]
            2xl:left-[-0px] 2xl:bottom-[-50px]
            3xl:left-[-100px] 3xl:bottom-[-100px]
            4xl:left-[-25px] 4xl:bottom-[-100px]">
              <div className="bg-purple-650 lg:bg-purple-550 h-48 w-48 lg:h-[280px] lg:w-[280px] 3xl:w-[430px] 3xl:h-[430px] rounded-full -mr-16 md:mr-0 lg:z-[1]"></div>
            </div>

            <div className="h-[280px] sm:h-[360px] md:h-[440px] lg:hidden flex justify-start items-center">
              <Image src={keflavik06Mobile} alt="keflavik03" className="h-full min-w-fit w-fit"/>
            </div>

            <div className="hidden lg:flex">
              <Image src={keflavik06} alt="keflavik03" className="object-contain"/>
            </div>
          </div>

          <div className="mt-12 space-y-12 text-lg leading-10 opacity-60 font-applesd max-w-screen-4xl mx-auto w-screen px-6 sm:px-0 lg:w-fit border lg:mx-0">
            <p>
              구독 시작, 최근 결제일 등으로 구독자를 관리하고 더 나은 서비스를 제안합니다.
            </p>
          </div>
        </div>
      </section>

      <ScrollTop />

    </main>
  )
}
