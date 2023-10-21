// export function getHeaderBg(path, mediaQuery) {
//   // const { pathname, media } = path;
//   if (path === '/' || path === '/contact') { return 'bg-transparent'; }
//   else if ((path === '/aboutus' || path === '/wework') && !mediaQuery) { return 'bg-black' }
//   else if ((path === '/aboutus' || path === '/wework') && mediaQuery) { return 'bg-transparent' }
//   else if ((path === '/service' || path === '/projects') && !mediaQuery) { return 'bg-black' }
//   else if ((path === '/service' || path === '/projects') && mediaQuery) { return 'bg-white' }
//   else if (path === '/projects/keflavik' || path === '/projects/aicity' || path === '/projects/washcube' ||
//     path === '/projects/winlottery' || path === '/projects/caremanager' || path === '/projects/rugolf') {
//     return 'bg-black';
//   }
// }




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
