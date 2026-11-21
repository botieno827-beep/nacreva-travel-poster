// Original procedural illustration: NACREVA, the island of the open shell.
// No external artwork, reference image or generated image is used.
import { writeFile } from 'node:fs/promises';
let state = 20261121;
function random() { state = (Math.imul(1664525, state) + 1013904223) >>> 0; return state / 4294967296; }
const f = value => Number(value.toFixed(2));
const parts = [];
const put = text => parts.push(text);
function path(d, fill, extra = '') { put(`<path d="${d}" fill="${fill}" ${extra}/>`); }
function ellipse(cx,cy,rx,ry,fill,extra='') { put(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" ${extra}/>`); }
function house(x,y,s=1) {
 put(`<g transform="translate(${x} ${y}) scale(${s})">`);
 path('M0 0 L17 -5 L31 0 L31 24 L0 25 Z','#f8e7cd');
 path('M17 -5 L31 0 L31 24 L17 19 Z','#d6b494');
 path('M-3 0 L12 -10 L34 -1 L18 4 Z','#b85842');
 path('M5 10 L10 9 L10 16 L5 17 Z','#285760');
 path('M19 9 L25 11 L25 17 L19 15 Z','#57736d');
 path('M12 15 Q16 12 18 16 L18 25 L12 25 Z','#1e5159');
 put('</g>');
}
put(`<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
<defs>
 <linearGradient id="sky" x2="0.18" y2="1"><stop stop-color="#f6eed9"/><stop offset=".58" stop-color="#f3dec0"/><stop offset="1" stop-color="#d5dfcf"/></linearGradient>
 <linearGradient id="sea" x2=".1" y2="1"><stop stop-color="#599b9e"/><stop offset=".25" stop-color="#3b9398"/><stop offset=".58" stop-color="#16848a"/><stop offset="1" stop-color="#0e5968"/></linearGradient>
 <linearGradient id="shell" x1=".12" y1=".1" x2=".78" y2=".94"><stop stop-color="#fff6d9"/><stop offset=".30" stop-color="#f5ddb2"/><stop offset=".55" stop-color="#dca779"/><stop offset=".74" stop-color="#f7d7a2"/><stop offset="1" stop-color="#a76e51"/></linearGradient>
 <linearGradient id="lip" x1=".05" y1=".1" x2=".9" y2=".85"><stop stop-color="#fff6dc"/><stop offset=".4" stop-color="#e2b080"/><stop offset=".7" stop-color="#b77455"/><stop offset="1" stop-color="#f8d29f"/></linearGradient>
 <linearGradient id="cave" x1=".08" y1="0" x2=".8" y2="1"><stop stop-color="#633d37"/><stop offset=".4" stop-color="#a76b50"/><stop offset=".76" stop-color="#e0a777"/><stop offset="1" stop-color="#ffe0a0"/></linearGradient>
 <linearGradient id="lagoon" x1=".3" y1="0" x2=".6" y2="1"><stop stop-color="#74c4bb"/><stop offset=".45" stop-color="#72d5c5"/><stop offset="1" stop-color="#27a7a6"/></linearGradient>
 <linearGradient id="sand" x1="0" y1="0" x2="1" y2=".8"><stop stop-color="#f7ddb0"/><stop offset=".7" stop-color="#f9ebcb"/><stop offset="1" stop-color="#dfb78c"/></linearGradient>
 <radialGradient id="sun"><stop stop-color="#fff8df" stop-opacity=".8"/><stop offset="1" stop-color="#fff8df" stop-opacity="0"/></radialGradient>
 <clipPath id="shellclip"><path d="M247 679 C213 614 221 508 264 430 C314 336 406 279 516 278 C666 273 802 363 851 493 C895 607 849 688 765 709 L655 707 C745 667 787 605 761 531 C738 465 679 422 612 431 C552 439 519 491 534 539 C548 581 592 594 621 572 C641 557 642 530 626 516 C614 503 594 506 590 520 C588 531 597 541 607 538 C611 557 586 564 570 545 C547 517 569 478 603 475 C657 469 694 517 679 566 C660 629 600 655 539 635 C457 609 418 527 445 456 C466 401 508 374 557 371 C430 343 327 426 306 525 C290 601 324 657 372 689 Z"/></clipPath>
 <clipPath id="waterclip"><rect x="0" y="654" width="1024" height="370"/></clipPath>
 <filter id="paper"><feTurbulence baseFrequency=".68" numOctaves="3" stitchTiles="stitch" seed="11"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".055"/></feComponentTransfer><feBlend in="SourceGraphic" mode="multiply"/></filter>
</defs>
<rect width="1024" height="1024" fill="url(#sky)"/>
<ellipse cx="245" cy="395" rx="230" ry="220" fill="url(#sun)"/>
<circle cx="202" cy="402" r="57" fill="#fff6d9" opacity=".8"/>
`);
// Long, quiet cloud shapes echo the curve of the shell without competing with it.
path('M0 273 C90 257 125 281 201 270 C237 265 268 250 312 256 C230 270 169 286 112 281 C69 277 33 281 0 286 Z','#fff8e4','opacity=".58"');
path('M736 243 C806 223 836 242 880 231 C929 218 963 230 1024 220 L1024 233 C938 245 841 253 736 243 Z','#fff6df','opacity=".72"');
path('M64 630 C110 610 142 622 169 614 C209 599 257 623 298 632 L298 664 L64 664Z','#96afaa','opacity=".55"');
put('<rect y="650" width="1024" height="374" fill="url(#sea)"/>');
path('M0 651 C215 648 337 655 507 651 C740 648 849 656 1024 651','none','stroke="#eef0d4" stroke-width="2" opacity=".5"');
// The shallow lagoon is visibly accessible from the shore.
path('M123 750 C262 685 556 661 793 708 C958 744 988 831 829 902 C680 969 357 959 153 889 C57 856 37 789 123 750Z','url(#lagoon)');
ellipse(558,713,315,26,'#174f58','opacity=".23"');
// Distant low headland, guesthouses and a walking path give the monument human scale.
path('M65 739 C105 693 179 677 235 663 C305 645 361 656 418 691 L473 735 C300 745 191 770 65 739 Z','#a6ab7b');
path('M69 740 C199 751 354 721 453 736 C310 775 167 780 69 740Z','#ad8260');
path('M88 741 C215 732 248 711 290 693 C323 679 352 686 385 702','none','stroke="#f2ddb1" stroke-width="8"');
// Main geological spiral: asymmetric outer mass and a sunlit inner lip.
const body='M247 679 C213 614 221 508 264 430 C314 336 406 279 516 278 C666 273 802 363 851 493 C895 607 849 688 765 709 L655 707 C745 667 787 605 761 531 C738 465 679 422 612 431 C552 439 519 491 534 539 C548 581 592 594 621 572 C641 557 642 530 626 516 C614 503 594 506 590 520 C588 531 597 541 607 538 C611 557 586 564 570 545 C547 517 569 478 603 475 C657 469 694 517 679 566 C660 629 600 655 539 635 C457 609 418 527 445 456 C466 401 508 374 557 371 C430 343 327 426 306 525 C290 601 324 657 372 689 Z';
path(body,'url(#shell)');
put('<g clip-path="url(#shellclip)">');
// Ribbed limestone: each seam follows the growth of the spiral.
for(let i=0;i<34;i++) {
 const t=i/33, a=-2.90+t*3.95;
 const ox=535+Math.cos(a)*330,oy=548+Math.sin(a)*276;
 const ix=558+Math.cos(a)*166,iy=523+Math.sin(a)*144;
 path(`M${f(ox)} ${f(oy)} Q${f((ox+ix)/2-28)} ${f((oy+iy)/2+13)} ${f(ix)} ${f(iy)}`,'none',`stroke="${i%3===0?'#966347':'#fff5d8'}" stroke-width="${i%3===0?2.3:3.1}" opacity="${i%3===0?.2:.37}"`);
}
for(let i=0;i<310;i++) {
 const x=220+random()*660,y=280+random()*440;
 path(`M${f(x)} ${f(y)} q${f(2+random()*8)} ${f(-4+random()*6)} ${f(5+random()*16)} ${f(-5+random()*8)}`,'none',`stroke="${random()>.5?'#fff4cf':'#8e624b'}" stroke-width="${f(.5+random()*.85)}" opacity=".13"`);
}
put('</g>');
path('M264 665 C234 574 271 445 370 373 C450 315 564 309 660 346','none','stroke="#fff5d6" stroke-width="8" opacity=".65"');
path('M773 687 C849 644 858 577 823 501 C785 420 699 363 605 362 C517 360 459 410 446 461','none','stroke="#b67d59" stroke-width="4" opacity=".35"');
path('M370 688 C322 651 303 602 317 538 C333 461 407 398 487 399 C458 425 434 464 433 500 C431 562 472 614 527 636 L515 674 C452 650 406 604 397 552 C383 609 408 658 451 696 Z','url(#lip)');
path('M515 674 C589 711 672 679 704 609 C731 549 709 493 666 468 C710 502 707 566 679 608 C643 661 582 677 528 654Z','#80513f','opacity=".62"');
// A broad warm cavern opens directly on the turquoise water.
path('M475 712 C464 653 482 612 523 599 C563 587 607 617 621 658 C628 677 628 700 625 718Z','url(#cave)');
path('M481 710 C480 669 490 638 512 624 C486 660 504 697 522 714Z','#644638','opacity=".66"');
path('M474 710 Q549 688 626 711 L624 726 Q547 738 477 726Z','#74cdb8');
path('M484 715 Q554 703 611 714','none','stroke="#e8e6b5" stroke-width="3" opacity=".82"');
path('M246 678 Q310 663 374 689 L475 707 L477 725 C365 742 301 727 234 705Z','#ad8860');
path('M228 700 C325 720 399 733 484 713','none','stroke="#f8e4b6" stroke-width="8"');
// A few compact houses cluster at the left foot, never covering the landmark.
house(139,704,.79);house(166,693,.88);house(197,684,.76);house(218,698,.92);house(250,688,.71);
house(278,674,.65);house(303,682,.73);house(328,691,.67);house(183,720,.78);
for(const [x,y,s] of [[116,721,1],[263,703,.8],[337,704,.65],[156,693,.7]]) {
 put(`<g transform="translate(${x} ${y}) scale(${s})">`);
 path('M0 0 Q-2 -23 1 -34 Q5 -22 7 0Z','#345f4c');
 path('M2 -24 Q-10 -32 -16 -26 Q-5 -24 2 -17 Q14 -27 22 -24 Q15 -32 2 -24Z','#3f6d50');
 put('</g>');
}
// Quiet parallel highlights, progressively larger toward the viewer.
put('<g clip-path="url(#waterclip)">');
for(let i=0;i<190;i++) {
 const x=random()*1040,y=663+random()*350;
 const length=3+random()*24+((y-650)/50);
 path(`M${f(x)} ${f(y)} q${f(length*.45)} -1 ${f(length)} 0`,'none',`stroke="${i%4===0?'#c9efce':'#99ded0'}" stroke-width="${f(.6+(y-650)/270)}" opacity="${f(.12+random()*.24)}"`);
}
put('</g>');
// Light reflected from the shell's sunlit arch.
for(let i=0;i<21;i++) { const y=731+i*3.8,w=15+i*1.35;path(`M${f(552-w)} ${f(y)} q${f(w)} 2 ${f(w*2)} 0`,'none',`stroke="#f4e0a6" stroke-width="${i<9?2:1}" opacity="${f(.45-i*.015)}"`); }
// Bathing beach sweeps in from the foreground, making the viewer feel present.
path('M0 837 C79 806 148 807 201 829 C260 854 276 908 344 930 C413 951 476 948 523 970 C552 983 574 1003 594 1024 L0 1024Z','url(#sand)');
path('M0 833 C89 801 153 803 204 825 C273 853 290 907 350 926 C422 949 486 944 532 968','none','stroke="#d3e5c3" stroke-width="13" opacity=".75"');
path('M0 824 C83 795 153 798 210 823 C279 853 298 902 356 920 C420 940 487 939 538 962','none','stroke="#eff1ce" stroke-width="3.5" opacity=".85"');
path('M0 917 L120 882 L209 925 L94 972 L0 954Z','#dfc395');
path('M0 911 L119 877 L210 918 L94 965 L0 949Z','#f4dfb8');
path('M94 965 L210 918 L210 927 L95 975Z','#b99572');
path('M50 897 L140 941 M13 909 L105 954 M91 884 L178 930','none','stroke="#c9b18b" stroke-width="1.3"');
// A small parasol, one folded towel, two swimmers: the implied holiday.
path('M116 904 L117 851','none','stroke="#895c46" stroke-width="2.2"');
path('M82 857 Q116 816 152 855 Q132 848 117 857 Q99 848 82 857Z','#bf6950');
path('M117 833 L117 857 Q99 848 82 857 Q97 836 117 833Z','#f3d7a5');
ellipse(117,832,2.5,2,'#975c43');
path('M144 920 L167 911 L179 917 L157 927Z','#567c7a');
ellipse(369,855,7,2,'#1e7d80','opacity=".5"');ellipse(370,849,2.5,3,'#634d3f');
path('M363 853 L373 854 L379 851','none','stroke="#d8b18a" stroke-width="1.8"');
ellipse(407,835,6,2,'#1e7d80','opacity=".5"');ellipse(407,830,2.3,2.7,'#624b3d');
path('M402 834 L413 835','none','stroke="#dab38e" stroke-width="1.6"');
// Single ochre sail lends scale to the far lagoon.
ellipse(792,802,33,4,'#0d6671','opacity=".22"');
path('M770 789 Q792 798 814 789 L804 800 L780 798Z','#914f37');
path('M794 741 L794 792','none','stroke="#655443" stroke-width="2"');
path('M790 746 Q773 766 774 785 L790 785Z','#eeb55d');
path('M798 752 L811 785 L798 785Z','#f8dfad');
// Foreground leaf framing is restrained and stays clear of the title.
path('M1000 1024 Q973 927 992 848','none','stroke="#1b5154" stroke-width="6"');
for(let i=0;i<8;i++){const y=872+i*17;path(`M990 ${y+11} Q${928-i*3} ${y-17} ${928-i*4} ${y-40} Q973 ${y-24} 990 ${y+11}Z`,i%2?'#255f5b':'#346f64');path(`M990 ${y+15} Q1040 ${y-21} 1051 ${y-42} Q1007 ${y-30} 990 ${y+15}Z`,'#204f51');}
// A fine ink border and warm paper edge make this feel like a complete print.
put('<rect x="18" y="18" width="988" height="988" rx="1" fill="none" stroke="#f6e9ca" stroke-width="22"/>');
put('<rect x="31" y="31" width="962" height="962" fill="none" stroke="#517475" stroke-width="1" opacity=".6"/>');
// Lettering is the only copy. Tracking and quiet sky give it deliberate hierarchy.
put('<text x="512" y="184" text-anchor="middle" font-family="Bodoni Moda, Bodoni MT, Georgia, serif" font-size="137" font-weight="400" letter-spacing="8" fill="#173e49">NACREVA</text>');
put('<path d="M443 218 H489 M535 218 H581" fill="none" stroke="#ae7c51" stroke-width="1.5"/><path d="M502 218 L512 212 L522 218 L512 224Z" fill="#b8895a"/>');
put('<rect x="32" y="32" width="960" height="960" fill="#c6a06f" opacity=".027" style="mix-blend-mode:multiply"/>');
put('</svg>');
await writeFile(new URL('./artwork.svg', import.meta.url), parts.join('\n'));
console.log(JSON.stringify({shapes:parts.length,seed:20261121}));
