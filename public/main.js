let d = document
function Galery () {
	let p = this.getAttribute('id')
	let parent = this.parentNode
	actionArrow(p,parent)
}

function closeCard () {
	let arr = []

    let card = document.querySelectorAll('.img-galery')
    let m = 1
	for (var i = 0; i < card.length; i++) {

		if (card[i].getAttribute('class').substring(11) != 'img0' + m) {
		arr.push(i)
		}
		m++
	}
	return arr
}
function actionArrow(id,parent) {
	const coord = ['img01','img02','img03']
    let galery = document.getElementById('img-galery-id')
	let position, close = closeCard()

	for (var i = 0; i < coord[0].length; i++) {
		if (coord[i] == id) {
			position = i
		}
	}
	if (parent.getAttribute('class').substring(11) == id){
		parent.classList.remove(coord[position])
		parent.children[0].classList.remove('up-rotate')
    	galery.style.margin = '-10em auto 0'
	}else {
		parent.classList.add(coord[position])
		parent.children[0].classList.add('up-rotate')
    	if (screen.width >= 900) {
    		galery.style.margin = '6em auto 0'
    	}
    	if (screen.width >= 480) {
    		galery.style.margin = '4em auto 0'
    	}
    	else{
    		galery.style.margin = '0em auto 0'
    	}
	}

}