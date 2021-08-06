let d = document
function Galery () {
	let p = this.getAttribute('id')
	let parent = this.parentNode
	actionArrow(p,parent)
}

function actionArrow(id,parent) {
	const coord = ['img01','img02','img03']
    const galery = document.getElementById('img-galery-id')
	let position

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