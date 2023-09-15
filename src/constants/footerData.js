import {
  FacebookDark,
  InstagramDark,
  KakaotalkDark,
  SlackDark,
  FacebookLight,
  InstagramLight,
  KakaotalkLight,
  SlackLight
} from "@/assets/images"
import { lightPaths, darkPaths } from "./paths"



export const footerDetails = {
  name: '로동',
  rep: '조이준',
  brn: '511-53-00073',
  loc: '경기도 안양시 만안구 덕천로 152번길 25 아이에스비즈타워 B동 1506호',
  tel: '010-6575-1161 / 031-444-1161',
  fax: '031-460-8553',
  email: 'cyj@lodong.co.kr'
}

export const footerDarkIcon = [
  {
    name: 'facebook',
    icon: FacebookDark,
  },
  {
    name: 'instagram',
    icon: InstagramDark,
  },
  {
    name: 'kakaotalk',
    icon: KakaotalkDark,
  },
  {
    name: 'slack',
    icon: SlackDark,
  }
]

export const footerLightIcon = [
  {
    name: 'facebook',
    icon: FacebookLight,
  },
  {
    name: 'instagram',
    icon: InstagramLight,
  },
  {
    name: 'kakaotalk',
    icon: KakaotalkLight,
  },
  {
    name: 'slack',
    icon: SlackLight,
  }
]

export const footerTheme = {
  mobile: {
    dark: {
      path: [...darkPaths],
    },
    light: {
      path: [...lightPaths]
    }
  },
  desktop: {
    light: {
      path: [...darkPaths, ...lightPaths]
    } 
  }
}