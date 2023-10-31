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

import {
  lightPaths,
  darkPaths,
  allPaths
} from "./routes"




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