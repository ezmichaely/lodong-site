"use client"

import {
  footerDetails,
  footerLightIcon,
  footerDarkIcon,
} from '@/constants/footerData';
import {
  lightPaths,
  darkPaths,
  allPaths
} from '@/constants/paths'
import './footerContentNew.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LodongBrand } from '@/assets/images';


export default function FooterContent() {
  const size = ''
  const pathname = usePathname();
  const homePath = pathname === '/' ? true : false;

  const themeBg = darkPaths.includes(pathname) ? 'bg-black lg:bg-white' : 'bg-white';
  const themeText = darkPaths.includes(pathname) ? 'text-white lg:text-jungle-400' : 'text-jungle-400';

  return (
    homePath ? null : (
      <footer className={`${themeBg} w-screen`}>
        <div className="max-w-screen-4xl px-fluid py-12 space-y-4">
          <div className="footer_container">
            <div class="left_div">
              {/* brand */}
              <div className='brand_div'>
                <Link href="/" >
                  <Image src={LodongBrand} alt="brand" priority/>
                </Link>
              </div>

              {/* details */}
              <div className={`${themeText} details_div`}>
                <div className="top">
                  <div className='top1'>
                    <p>
                      <span className="text_legend font-bold">상호 : </span>
                      <span className="text_details">{ footerDetails.name }</span>
                    </p>

                    <p>
                      <span className="text_legend font-bold">대표 : </span>
                      <span className="text_details">{ footerDetails.rep }</span>
                    </p>

                    <p>
                      <span className="text_legend font-bold">사업자등록번호 : </span>
                      <span className="text_details">{ footerDetails.brn }</span>
                    </p>
                  </div>

                  <div className="top2">
                    <p>
                      <span className="text_legend font-bold">소재지 : </span>
                      <span className="text_details">{ footerDetails.loc }</span>
                    </p>
                  </div>
                </div>


                <div className="bottom">
                  <p>
                    <span className="text_legend font-medium">TEL : </span>
                    <span className="text_details">{ footerDetails.tel }</span>
                  </p>

                  <p>
                    <span className="text_legend font-medium">FAX : </span>
                    <span className="text_details">{ footerDetails.fax }</span>
                  </p>

                  <p>
                    <span className="text_legend font-medium">Email : </span>
                    <span className="text_details">{ footerDetails.email }</span>
                  </p>
                </div>
              </div>
            </div>

            
            {/* icons */}
            {darkPaths.includes(pathname) && (
              <div className="iconsMobile_div">
                {footerLightIcon.map((data) => (
                  <Link href="#" key={data.name}>
                    <Image src={data.icon} alt={data.name} className=''/>
                  </Link>
                ))}
              </div>
            )}
            
            {lightPaths.includes(pathname) && (
              <div className="iconsMobile_div">
                {footerDarkIcon.map((data) => (
                  <Link href="#" key={data.name}>
                    <Image src={data.icon} alt={data.name} className=''/>
                  </Link>
                ))}
              </div>
            )}

            <div className="right_div">
              {allPaths.includes(pathname) && (
                <div className="iconsDesktop_div">
                  {footerDarkIcon.map((data) => (
                    <Link href="#" key={data.name}>
                      <Image src={data.icon} alt={data.name} className=''/>
                    </Link>
                  ))}
                </div>
              )}

              <p className={`${themeText} copyright_desktop` }>
                Copyright ⓒ 2023 Lodong Co., Ltd. All Rights Reserved
              </p>
            </div>
          </div>

          {/* copyrights */}
          <div className="w-full">
            <p className={`${themeText} copyright_mobile` }>
              Copyright ⓒ 2023 Lodong Co., Ltd. All Rights Reserved
            </p>
          </div>

        </div>
      </footer>
    )
  )
}