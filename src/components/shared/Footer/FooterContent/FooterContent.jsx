"use client"

import {
  footerDetails,
  footerLightIcon,
  footerDarkIcon,
} from '@/constants/footerData';
import {
  lightPaths,
  darkPaths,
} from '@/constants/paths'
import styles from './footerContent.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LodongBrand } from '@/assets/images';


export default function FooterContent() {
  const pathname = usePathname();
  const homePath = pathname === '/' ? true : false;

  const themeBg = darkPaths.includes(pathname) ? 'bg-black lg:bg-white' : 'bg-white';
  const themeText = darkPaths.includes(pathname) ? 'text-white lg:text-jungle-400' : 'text-jungle-400';

  return (
    homePath ? null : (
      <footer>
        <div className={`${themeBg} w-screen`}>
          <div className="content px-fluid py-8">

            {/* mobile layout */}
            <div className={`${styles.mobileLayout}`}>
              {/* details */}
              <div className={`${themeText}  grid col-span-3 grid-rows-2 gap-y-8`}>
                <div className="space-y-1">

                  <p className='space-x-8'>
                    <span className='whitespace-nowrap'>
                      <span className={`${styles.textBase} font-bold`}>상호 : </span>
                      <span className={`${styles.fontMedium60}`}>{ footerDetails.name }</span>
                    </span>

                    <span className=''>
                      <span className={`${styles.textBase} font-bold`}>대표 : </span>
                      <span className={`${styles.fontMedium60}`}>{ footerDetails.rep }</span>
                    </span>
                  </p>

                  <p>
                    <span className={`${styles.textBase} font-bold`}>사업자등록번호 : </span>
                    <span className={`${styles.fontMedium60}`}>{ footerDetails.brn }</span>
                  </p>

                  <p>
                    <span className={`${styles.textBase} font-bold`}>소재지 : </span>
                    <span className={`${styles.fontMedium60}`}>{ footerDetails.loc }</span>
                  </p>
                </div>

                <div className="space-y-1 lg:space-x-6">
                  <p>
                    <span className={`${styles.textBase} font-medium`}>TEL : </span>
                    <span className={`${styles.fontMedium60}`}>{ footerDetails.tel }</span>
                  </p>
                  <p>
                    <span className={`${styles.textBase} font-medium`}>FAX : </span>
                    <span className={`${styles.fontMedium60}`}>{ footerDetails.fax }</span>
                  </p>
                  <p>
                    <span className={`${styles.textBase} font-medium`}>Email : </span>
                    <span className={`${styles.fontMedium60}`}>{ footerDetails.email }</span>
                  </p>
                </div>
              </div>

              {/* icons */}
              {darkPaths.includes(pathname) && (
                <div className="grid col-span-1 grid-rows-4 justify-end">
                  {footerLightIcon.map((data) => (
                    <Link href="#" key={data.name}>
                      <Image src={data.icon} alt={data.name} />
                    </Link>
                  ))}
                </div>
              )}

              {lightPaths.includes(pathname) && (
                <div className="grid col-span-1 grid-rows-4 justify-end">
                  {footerDarkIcon.map((data) => (
                    <Link href="#" key={data.name}>
                      <Image src={data.icon} alt={data.name} />
                    </Link>
                  ))}
                </div>
              )}

              {/* copyrights */}
              <div className="col-span-4 ">
                <p className={`${themeText} ${styles.mobileCopyrights}` }>
                  Copyright ⓒ 2023 Lodong Co., Ltd. All Rights Reserved
                </p>
              </div>
            </div>


            {/* desktop layout */}
            <div className={`${styles.desktopLayout}`}>

              <div className="flex justify-start items-center flex-row gap-x-16">
                {/* brand */}
                <div className='block'>
                  <Link href="/" >
                    <Image src={LodongBrand} alt="brand" priority/>
                  </Link>
                </div>

                {/* details */}
                <div className={`${themeText} grow flex flex-col flex-wrap gap-x-10`}>
                  <div className="gap-x-10 flex flex-row flex-wrap">
                    <p>
                      <span className={`${styles.textBase}`}>상호 : </span>
                      <span className={`${styles.font_medium_60}`}>{ footerDetails.name }</span>
                    </p>

                    <p>
                      <span className={`${styles.textBase}`}>대표 : </span>
                      <span className={`${styles.fontMedium60}`}>{ footerDetails.rep }</span>
                    </p>

                    <p>
                      <span className={`${styles.textBase}`}>사업자등록번호 : </span>
                      <span className={`${styles.fontMedium60}`}>{ footerDetails.brn }</span>
                    </p>
                  </div>

                  <div className="gap-x-10 flex flex-row flex-wrap">
                    <p>
                      <span className={`${styles.textBase}`}>소재지 : </span>
                      <span className={`${styles.fontMedium60}`}>{ footerDetails.loc }</span>
                    </p>
                  </div>

                  <div className="gap-x-10 flex flex-row flex-wrap">
                    <p>
                      <span className={`${styles.textBase} font-medium`}>TEL : </span>
                      <span className={`${styles.fontMedium60}`}>{ footerDetails.tel }</span>
                    </p>

                    <p>
                      <span className={`${styles.textBase} font-medium`}>FAX : </span>
                      <span className={`${styles.fontMedium60}`}>{ footerDetails.fax }</span>
                    </p>

                    <p>
                      <span className={`${styles.textBase} font-medium`}>Email : </span>
                      <span className={`${styles.fontMedium60}`}>{ footerDetails.email }</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full xl:w-fit flex justify-center xl:justify-start flex-col gap-y-4">

                {/* icons */}
                <div className="w-full flex justify-center xl:justify-start items-center gap-x-10">
                  {footerDarkIcon.map((data) => (
                    <Link href="#" key={data.name}>
                      <Image src={data.icon} alt={data.name} />
                    </Link>
                  ))}
                </div>


                {/* copyrights */}
                <div className="w-full">
                  <p className={`${themeText} ${styles.desktopCopyrights}` }>
                    Copyright ⓒ 2023 Lodong Co., Ltd. All Rights Reserved
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>
    )
  )
}