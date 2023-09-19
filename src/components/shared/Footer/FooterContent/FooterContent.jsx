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
import styles from './footerContent.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LodongBrand } from '@/assets/images';


export default function FooterContent() {
  const size = ''
  const pathname = usePathname();
  const homePath = pathname === '/' ;

  const themeBg = darkPaths.includes(pathname) ? 'bg-black lg:bg-white' : 'bg-white';
  const themeText = darkPaths.includes(pathname) ? 'text-white lg:text-jungle-400' : 'text-jungle-400';

  return (
    homePath ? null: (
      <footer className={`${themeBg} w-screen`}>
        <div className={`${styles.footerContainer}`}>
          {/* brand + details + icons */}
          <div className={`${styles.footerContent}`}>
            <div className={`${styles.leftDiv}`}>
              {/* brand */}
              <div className={`${styles.brandDiv}`}>
                <Link href="/" >
                  <Image src={LodongBrand} alt="brand" priority />
                </Link>
              </div>

              {/* details */}
              <div className={`${themeText} ${styles.detailsDiv}`}>
                <div className={`${styles.top}`}>
                  <div className={`${styles.top1}`}>
                    <p>
                      <span className={`${styles.textLegend} font-bold`}>상호 : </span>
                      <span className={`${styles.textDetails}`}>{footerDetails.name}</span>
                    </p>

                    <p>
                      <span className={`${styles.textLegend} font-bold`}>대표 : </span>
                      <span className={`${styles.textDetails}`}>{footerDetails.rep}</span>
                    </p>

                    <p>
                      <span className={`${styles.textLegend} font-bold`}>사업자등록번호 : </span>
                      <span className={`${styles.textDetails}`}>{footerDetails.brn}</span>
                    </p>
                  </div>

                  <div>
                    <p>
                      <span className={`${styles.textLegend} font-bold`}>소재지 : </span>
                      <span className={`${styles.textDetails}`}>{footerDetails.loc}</span>
                    </p>
                  </div>
                </div>

                <div className={`${styles.bottom}`}>
                  <p>
                    <span className={`${styles.textLegend} font-medium`}>TEL : </span>
                    <span className={`${styles.textDetails}`}>{footerDetails.tel}</span>
                  </p>

                  <p>
                    <span className={`${styles.textLegend} font-medium`}>FAX : </span>
                    <span className={`${styles.textDetails}`}>{footerDetails.fax}</span>
                  </p>

                  <p>
                    <span className={`${styles.textLegend} font-medium`}>Email : </span>
                    <span className={`${styles.textDetails}`}>{footerDetails.email}</span>
                  </p>
                </div>
              </div>
            </div>


            {/* icons */}
            {darkPaths.includes(pathname) && (
              <div className={`${styles.iconsMobileDiv}`}>
                {footerLightIcon.map((data) => (
                  <Link href="#" key={data.name}>
                    <Image src={data.icon} alt={data.name} />
                  </Link>
                ))}
              </div>
            )}

            {lightPaths.includes(pathname) && (
              <div className={`${styles.iconsMobileDiv}`}>
                {footerDarkIcon.map((data) => (
                  <Link href="#" key={data.name}>
                    <Image src={data.icon} alt={data.name} />
                  </Link>
                ))}
              </div>
            )}

            <div className={`${styles.rightDiv}`}>
              {allPaths.includes(pathname) && (
                <div className={`${styles.iconsDesktopDiv}`}>
                  {footerDarkIcon.map((data) => (
                    <Link href="#" key={data.name}>
                      <Image src={data.icon} alt={data.name} />
                    </Link>
                  ))}
                </div>
              )}

              <p className={`${themeText} ${styles.copyrightDesktop}`}>
                Copyright ⓒ 2023 Lodong Co., Ltd. All Rights Reserved
              </p>
            </div>
          </div>

          {/* copyrights */}
          <div className="w-full">
            <p className={`${themeText} ${styles.copyrightMobile}`}>
              Copyright ⓒ 2023 Lodong Co., Ltd. All Rights Reserved
            </p>
          </div>

        </div>
      </footer>
    )

  )
}