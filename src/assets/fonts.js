import Apple_SD from 'next/font/local';
import Nanum_Brush_Script from 'next/font/local';
import Inter from 'next/font/local';
import Kumbh_Sans from 'next/font/local';
import Roboto_Slab from 'next/font/local';
import Jacques_Francois from 'next/font/local';

export const applesd = Apple_SD({
  variable: '--font-applesd',
  display: 'swap',
  src: [
    {
      path: './fonts/AppleSDGothicNeo/100_AppleSDGothicNeo-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/AppleSDGothicNeo/200_AppleSDGothicNeo-UltraLight.ttf',
      weight: '200',
    },
    {
      path: './fonts/AppleSDGothicNeo/300_AppleSDGothicNeo-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/AppleSDGothicNeo/400_AppleSDGothicNeo-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/AppleSDGothicNeo/500_AppleSDGothicNeo-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/AppleSDGothicNeo/600_AppleSDGothicNeo-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/AppleSDGothicNeo/700_AppleSDGothicNeo-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/AppleSDGothicNeo/800_AppleSDGothicNeo-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/AppleSDGothicNeo/900_AppleSDGothicNeo-Heavy.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
})

export const nanum = Nanum_Brush_Script({
  variable: '--font-nanum',
  display: 'swap',
  subsets: ['latin'],
  src: [
    {
      path: './fonts/NanumBrushScript/NanumBrushScript-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
})

export const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
  src: [
    {
      path: './fonts/Inter/Inter-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter-ExtraLight.ttf',
      weight: '200',
    },
    {
      path: './fonts/Inter/Inter-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
})

export const kumbh = Kumbh_Sans({
  variable: '--font-kumbh',
  display: 'swap',
  subsets: ['latin'],
  src: [
    {
      path: './fonts/KumbhSans/KumbhSans-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/KumbhSans/KumbhSans-ExtraLight.ttf',
      weight: '200',
    },
    {
      path: './fonts/KumbhSans/KumbhSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/KumbhSans/KumbhSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/KumbhSans/KumbhSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/KumbhSans/KumbhSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/KumbhSans/KumbhSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/KumbhSans/KumbhSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/KumbhSans/KumbhSans-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
})

export const roboto_slab = Roboto_Slab({
  variable: '--font-kumbh',
  display: 'swap',
  subsets: ['latin'],
  src: [
    {
      path: './fonts/RobotoSlab/RobotoSlab-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/RobotoSlab/RobotoSlab-ExtraLight.ttf',
      weight: '200',
    },
    {
      path: './fonts/RobotoSlab/RobotoSlab-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/RobotoSlab/RobotoSlab-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/RobotoSlab/RobotoSlab-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/RobotoSlab/RobotoSlab-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/RobotoSlab/RobotoSlab-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/RobotoSlab/RobotoSlab-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/RobotoSlab/RobotoSlab-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
})

export const jacques = Jacques_Francois({
  subsets: ['latin'],
  variable: '--font-jacques',
  display: 'swap',
  src: [
    {
      path: './fonts/JacquesFrancois/JacquesFrancois-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ]
})

