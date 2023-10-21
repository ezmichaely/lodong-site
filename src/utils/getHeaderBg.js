export function getHeaderBg(path, mediaQuery) {
  switch (path) {
    case '/':
    case '/contact':
      return 'bg-transparent';
    case '/aboutus':
      return mediaQuery ? 'bg-black' : 'bg-transparent';
    case '/wework':
    case '/service':
    case '/projects':
      return mediaQuery ? 'bg-black' : 'bg-white';
    case '/projects/keflavik':
    case '/projects/aicity':
    case '/projects/washcube':
    case '/projects/winlottery':
    case '/projects/caremanager':
    case '/projects/rugolf':
      return 'bg-black';
    default:
      return 'bg-transparent';
  }
}
