import { 
    Nanum_Brush_Script,
    Inter,
    Kumbh_Sans,
    Roboto_Slab,
    Jacques_Francois 
} from 'next/font/google';

import Apple_SD from 'next/font/local';

export const nanum = Nanum_Brush_Script({
    subsets: ['latin'],
    variable: '--font-nanum',
    display: 'swap',
    style: ['normal'],
    weight: ['400'],
})

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
    style: ['normal'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const kumbh = Kumbh_Sans({
    subsets: ['latin'],
    variable: '--font-kumbh',
    display: 'swap',
    style: ['normal'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto_slab',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export const jacques = Jacques_Francois({
    subsets: ['latin'],
    variable: '--font-jacques',
    display: 'swap',
    style: ['normal'],
    weight: ['400'],
})

export const applesd = Apple_SD({
    variable: '--font-applesd',
    display: 'swap',
    src: [
        {
            path: '../../public/fonts/AppleSDGothicNeo/100_AppleSDGothicNeo-Thin.ttf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../public/fonts/AppleSDGothicNeo/200_AppleSDGothicNeo-UltraLight.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../public/fonts/AppleSDGothicNeo/300_AppleSDGothicNeo-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/AppleSDGothicNeo/400_AppleSDGothicNeo-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/AppleSDGothicNeo/500_AppleSDGothicNeo-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/AppleSDGothicNeo/600_AppleSDGothicNeo-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/AppleSDGothicNeo/700_AppleSDGothicNeo-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/AppleSDGothicNeo/800_AppleSDGothicNeo-ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../public/fonts/AppleSDGothicNeo/900_AppleSDGothicNeo-Heavy.ttf',
            weight: '900',
            style: 'normal',
        },
    ],
})



// export const applesd = Apple_SD({
//     variable: '--font-applesd',
//     display: 'swap',
//     src: [
//         {
//             path: './fonts/AppleSDGothicNeo/100_AppleSDGothicNeo-Thin.ttf',
//             weight: '100',
//             style: 'normal',
//         },
//         {
//             path: './fonts/AppleSDGothicNeo/200_AppleSDGothicNeo-UltraLight.ttf',
//             weight: '200',
//             style: 'normal',
//         },
//         {
//             path: './fonts/AppleSDGothicNeo/300_AppleSDGothicNeo-Light.ttf',
//             weight: '300',
//             style: 'normal',
//         },
//         {
//             path: './fonts/AppleSDGothicNeo/400_AppleSDGothicNeo-Regular.ttf',
//             weight: '400',
//             style: 'normal',
//         },
//         {
//             path: './fonts/AppleSDGothicNeo/500_AppleSDGothicNeo-Medium.ttf',
//             weight: '500',
//             style: 'normal',
//         },
//         {
//             path: './fonts/AppleSDGothicNeo/600_AppleSDGothicNeo-SemiBold.ttf',
//             weight: '600',
//             style: 'normal',
//         },
//         {
//             path: './fonts/AppleSDGothicNeo/700_AppleSDGothicNeo-Bold.ttf',
//             weight: '700',
//             style: 'normal',
//         },
//         {
//             path: './fonts/AppleSDGothicNeo/800_AppleSDGothicNeo-ExtraBold.ttf',
//             weight: '800',
//             style: 'normal',
//         },
//         {
//             path: './fonts/AppleSDGothicNeo/900_AppleSDGothicNeo-Heavy.ttf',
//             weight: '900',
//             style: 'normal',
//         },
//     ],
// })