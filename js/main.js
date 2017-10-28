
// MOBILE MENU OPEN AND CLOSE - DO NOT ALTER!!
document.getElementById('menuBtn').addEventListener('click', function (  ) {
  // OPEN MENU
  if (document.getElementById('menuSlide').classList.contains('menuMobile' && 'slideMenuOpen')) {
   document.getElementById('menuSlide').classList.add('menuMobileOpen');
   document.getElementById('x').classList.add('xClose');
   document.getElementById('y').classList.add('yClose');
   document.getElementById('z').classList.add('zClose');
   document.getElementById('background').classList.add('backgroundOn');
   document.getElementById('menuSlide').classList.remove('slideMenuOpen');
   console.log("That menu open is smooth, am I right?");
 } else {
   document.getElementById('menuSlide').classList.remove('menuMobileOpen');
   document.getElementById('x').classList.remove('xClose');
   document.getElementById('y').classList.remove('yClose');
   document.getElementById('z').classList.remove('zClose');
   document.getElementById('background').classList.remove('backgroundOn');
   document.getElementById('menuSlide').classList.add("slideMenuOpen");
   console.log("Yeah, the close is just as smooth.");
 }
 });
