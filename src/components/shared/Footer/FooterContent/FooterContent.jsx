"use client"

import {
  footerDetails,
  footerLightIcon,
  footerDarkIcon,
} from '@/constants/footer';
import {
  lightPaths,
  darkPaths,
} from '@/constants/paths'
import styles from './footerContent.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LodongBrand } from '@/assets/images';


export default function DarkFooter() {
  const pathname = usePathname();
  const homePath = pathname === '/' ? 'hidden' : 'block';
  console.log({homePath, pathname})

  const themeBg = darkPaths.includes(pathname) ? 'bg-black lg:bg-white' : 'bg-white';
  const themeText = darkPaths.includes(pathname) ? 'text-white lg:text-jungle-400' : 'text-jungle-400';
 
  return (
    <footer className={`${homePath}`}>
      <div className={`${themeBg} w-screen`}>
        <div className="content py-8">
          
          {/* mobile layout */}
          <div className={`${styles.mobile_layout}`}>
            {/* details */}
            <div className={`${themeText}  grid col-span-3 grid-rows-2 gap-y-8`}>
              <div className="space-y-1">

                <p className='space-x-8'>
                  <span className='whitespace-nowrap'>
                    <span className={`${styles.text_base} font-bold`}>상호 : </span>
                    <span className={`${styles.font_medium_60}`}>{ footerDetails.name }</span>
                  </span>

                  <span className=''>
                    <span className={`${styles.text_base} font-bold`}>대표 : </span>
                    <span className={`${styles.font_medium_60}`}>{ footerDetails.rep }</span>
                  </span>
                </p>

                <p>
                  <span className={`${styles.text_base} font-bold`}>사업자등록번호 : </span>
                  <span className={`${styles.font_medium_60}`}>{ footerDetails.brn }</span>
                </p>

                <p>
                  <span className={`${styles.text_base} font-bold`}>소재지 : </span>
                  <span className={`${styles.font_medium_60}`}>{ footerDetails.loc }</span>
                </p>
              </div>
            
              <div className="space-y-1 lg:space-x-6">
                <p>
                  <span className={`${styles.text_base} font-medium`}>TEL : </span>
                  <span className={`${styles.font_medium_60}`}>{ footerDetails.tel }</span>
                </p>
                <p>
                  <span className={`${styles.text_base} font-medium`}>FAX : </span>
                  <span className={`${styles.font_medium_60}`}>{ footerDetails.fax }</span>
                </p>
                <p>
                  <span className={`${styles.text_base} font-medium`}>Email : </span>
                  <span className={`${styles.font_medium_60}`}>{ footerDetails.email }</span>
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
              <p className={`${themeText} text-center font-applesd font-medium text-13 opacity-50 tracking-tight font-lighter` }>
                Copyright ⓒ 2023 Lodong Co., Ltd. All Rights Reserved 
              </p>
            </div>
          </div>

          
          {/* desktop layout */}
          <div className={`${styles.desktop_layout}`}>

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
                    <span className={`${styles.text_base}`}>상호 : </span>
                    <span className={`${styles.font_medium_60}`}>{ footerDetails.name }</span>
                  </p>

                  <p>
                    <span className={`${styles.text_base}`}>대표 : </span>
                    <span className={`${styles.font_medium_60}`}>{ footerDetails.rep }</span>
                  </p>

                  <p>
                    <span className={`${styles.text_base}`}>사업자등록번호 : </span>
                    <span className={`${styles.font_medium_60}`}>{ footerDetails.brn }</span>
                  </p>
                </div>

                <div className="gap-x-10 flex flex-row flex-wrap">
                  <p>
                    <span className={`${styles.text_base}`}>소재지 : </span>
                    <span className={`${styles.font_medium_60}`}>{ footerDetails.loc }</span>
                  </p>
                </div>

                <div className="gap-x-10 flex flex-row flex-wrap">
                  <p>
                    <span className={`${styles.text_base} font-medium`}>TEL : </span>
                    <span className={`${styles.font_medium_60}`}>{ footerDetails.tel }</span>
                  </p>

                  <p>
                    <span className={`${styles.text_base} font-medium`}>FAX : </span>
                    <span className={`${styles.font_medium_60}`}>{ footerDetails.fax }</span>
                  </p>

                  <p>
                    <span className={`${styles.text_base} font-medium`}>Email : </span>
                    <span className={`${styles.font_medium_60}`}>{ footerDetails.email }</span>
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
                <p className={`${themeText} text-center xl:text-left font-applesd font-medium text-13 text-jungle opacity-50 lg:opacity-100 tracking-wide font-lighter whitespace-nowrap` }>
                  Copyright ⓒ 2023 Lodong Co., Ltd. All Rights Reserved 
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}