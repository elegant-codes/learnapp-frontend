
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#card-slider', {
    // type   : 'loop',
    perMove: 1,
    perPage    : 3,
    focus: 'center',
		breakpoints: {
			300: {
				perPage: 1,
			}
		}
  } ).mount();
} );



// document.addEventListener('DOMContentLoaded', function () {
//   new Splide('#card-slider', {
//   fixedWidth : 100,
// 	height     : 60,
// 	gap        : 10,
// 	rewind     : true,
// 	cover      : true,
// 	// pagination : false,
// 	focus      : 'center',
// 	breakpoints : {
// 		'600': {
// 			fixedWidth: 100,
// 			height    : 60,
// 		}
// 	}
// } ).mount();
// } );