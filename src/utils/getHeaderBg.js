export function getHeaderBg(path, mediaQuery) {
  if (path === '/' || path === '/contact') { return 'bg-transparent'; }
  else if ((path === '/aboutus' || path === '/wework') && mediaQuery === false) { return 'bg-black' }
  else if ((path === '/aboutus' || path === '/wework') && mediaQuery === true) { return 'bg-transparent' }
  else if ((path === '/service' || path === '/projects') && mediaQuery === false) { return 'bg-black' }
  else if ((path === '/service' || path === '/projects') && mediaQuery === true) { return 'bg-white' }
  else if (path === '/projects/keflavik' || path === '/projects/aicity' || path === '/projects/washcube' ||
    path === '/projects/winlottery' || path === '/projects/caremanager' || path === '/projects/rugolf') {
    return 'bg-black';
  }
}