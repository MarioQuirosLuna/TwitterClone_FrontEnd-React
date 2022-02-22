// left: 37, up: 38, right: 39, down: 40,
const keys = { 37: 1, 38: 1, 39: 1, 40: 1 }

const preventDefault = (e) => {
	e.preventDefault()
}

const preventDefaultForScrollKeys = (e) => {
	if (keys[e.keyCode]) {
		preventDefault(e)
		return false
	}
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false
try {
	window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
		get: function () { supportsPassive = true }
	}))
} catch (e) { }

let wheelOpt = supportsPassive ? { passive: false } : false
let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'


export const disableScroll = () => {
	window.addEventListener('DOMMouseScroll', preventDefault, false)
	window.addEventListener(wheelEvent, preventDefault, wheelOpt)
	window.addEventListener('touchmove', preventDefault, wheelOpt) //Mobile
	window.addEventListener('keydown', preventDefaultForScrollKeys, false)
}

export const enableScroll = () => {
	window.removeEventListener('DOMMouseScroll', preventDefault, false)
	window.removeEventListener(wheelEvent, preventDefault, wheelOpt)
	window.removeEventListener('touchmove', preventDefault, wheelOpt)
	window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
}
