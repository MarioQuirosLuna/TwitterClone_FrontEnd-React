const format24to12 = (hour) => {
	return (hour > 12) ? (hour - 12) : hour
}

const getAM_PM = (hour) => {
	return (hour >= 12) ? 'PM' : 'AM'
}

const addPrevZero = (hours) => {
	return (hours < 10) ? `0${hours}` : hours
}

const useGetPostTime = (datePosted, exactDate) => {
	if (!datePosted) return
	const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep,', 'Oct', 'Nov', 'Dec']
	const date = new Date(datePosted)

	if (exactDate) {
		return `${format24to12(date.getHours())}:${addPrevZero(date.getMinutes())} ${getAM_PM(date.getHours())} · ${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
	}

	const yearDifferent = new Date().getFullYear() - date.getFullYear()
	const monthDifferent = new Date().getMonth() - date.getMonth()
	const daysDifference = new Date().getDate() - date.getDate()
	const hoursDifference = new Date().getHours() - date.getHours()
	const minutesDifference = new Date().getMinutes() - date.getMinutes()
	const secondsDifference = new Date().getSeconds() - date.getSeconds()

	let difference = monthDifferent

	if (yearDifferent > 0) {
		difference = `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

	} else if (monthDifferent > 0 || daysDifference > 0) {
		difference = `${month[date.getMonth()]} ${date.getDate()}`
	} else if (hoursDifference > 0) {
		difference = `${hoursDifference}h`

	} else if (minutesDifference > 0) {
		difference = `${minutesDifference}m`

	} else if (secondsDifference > 0) {
		difference = `${secondsDifference}s`

	}
	return difference
}

export default useGetPostTime