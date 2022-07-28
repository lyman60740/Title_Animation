var cube = document.querySelector('.cube');
var container = document.querySelector('.container');
var letterL = document.querySelector('.letterL');
var letterY = document.querySelector('.letterY');
var letterM = document.querySelector('.letterM');
var letterA = document.querySelector('.letterA');
var letterN = document.querySelector('.letterN');
var letter6 = document.querySelector('.letter6');

var frontL = document.querySelector('.frontL');
var topL = document.querySelector('.topL');
var frontY = document.querySelector('.frontY');
var topY = document.querySelector('.topY');
var frontM = document.querySelector('.frontM');
var topM = document.querySelector('.topM');
var frontA = document.querySelector('.frontA');
var topA = document.querySelector('.topA');
var frontN = document.querySelector('.frontN');
var topN = document.querySelector('.topN');
var front6 = document.querySelector('.front6');
var top6 = document.querySelector('.top6');

var timingDisparitionLetter = 200;


function changeSide() {
  
letterL.classList.add('show-top')
letterL.classList.remove('show-front')
topL.classList.remove('opacityDown')

	setTimeout(() =>{
	
	frontL.classList.add('opacityDown')
	}, timingDisparitionLetter)

	setTimeout(() =>{
		letterY.classList.add('show-top')
		letterY.classList.remove('show-front')
		topY.classList.remove('opacityDown')
			setTimeout(() =>{
				
				frontY.classList.add('opacityDown')
			}, timingDisparitionLetter)

	}, 100)


		setTimeout(() =>{
			letterM.classList.add('show-top')
			letterM.classList.remove('show-front')
			topM.classList.remove('opacityDown')
				setTimeout(() =>{
					
					frontM.classList.add('opacityDown')
				}, timingDisparitionLetter)

		}, 200)

			setTimeout(() =>{
				letterA.classList.add('show-top')
				letterA.classList.remove('show-front')
				topA.classList.remove('opacityDown')
					setTimeout(() =>{
						
						frontA.classList.add('opacityDown')
					}, timingDisparitionLetter)

			}, 300)

				setTimeout(() =>{
					letterN.classList.add('show-top')
					letterN.classList.remove('show-front')
					topN.classList.remove('opacityDown')
						setTimeout(() =>{
							
							frontN.classList.add('opacityDown')
						}, timingDisparitionLetter)

				}, 400)

				setTimeout(() =>{
					letter6.classList.add('show-top')
					letter6.classList.remove('show-front')
					top6.classList.remove('opacityDown')
						setTimeout(() =>{
							
							front6.classList.add('opacityDown')
						}, timingDisparitionLetter)

				}, 500)
}

function initialSide() {
  
	letterL.classList.remove('show-top')
	letterL.classList.add('show-front')
	frontL.classList.remove('opacityDown')
	

	setTimeout(() =>{
	topL.classList.add('opacityDown')
	
	}, timingDisparitionLetter)

	setTimeout(() =>{
		letterY.classList.remove('show-top')
		letterY.classList.add('show-front')
		frontY.classList.remove('opacityDown')
			setTimeout(() =>{
				topY.classList.add('opacityDown')
				
			}, timingDisparitionLetter)
	}, 100)
		setTimeout(() =>{
			letterM.classList.remove('show-top')
			letterM.classList.add('show-front')
			frontM.classList.remove('opacityDown')
				setTimeout(() =>{
					topM.classList.add('opacityDown')
					
				}, timingDisparitionLetter)
		}, 200)
			setTimeout(() =>{
				letterA.classList.remove('show-top')
				letterA.classList.add('show-front')
				frontA.classList.remove('opacityDown')
					setTimeout(() =>{
						topA.classList.add('opacityDown')
						
					}, timingDisparitionLetter)
			}, 300)
				setTimeout(() =>{
					letterN.classList.remove('show-top')
					letterN.classList.add('show-front')
					frontN.classList.remove('opacityDown')
						setTimeout(() =>{
							topN.classList.add('opacityDown')
							
						}, timingDisparitionLetter)
				}, 400)

				setTimeout(() =>{
					letter6.classList.remove('show-top')
					letter6.classList.add('show-front')
					front6.classList.remove('opacityDown')
						setTimeout(() =>{
							top6.classList.add('opacityDown')
							
						}, timingDisparitionLetter)
				}, 500)

	}

container.addEventListener( 'mouseenter', changeSide );
container.addEventListener( 'mouseleave', initialSide );


