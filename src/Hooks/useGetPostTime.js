const useGetPostTime = (datePosted) => {
	const date = new Date(datePosted)
	const yearDifferent = new Date().getFullYear() - date.getFullYear()
	const daysDifference = new Date().getDate() - date.getDate()
	const hoursDifference = new Date().getHours() - date.getHours()
	const minutesDifference = new Date().getMinutes() - date.getMinutes()
	const secondsDifference = new Date().getSeconds() - date.getSeconds()

	const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep,', 'Oct', 'Nov', 'Dec']

	let difference

	if (yearDifferent > 0) {
		difference = `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

	} else if (daysDifference > 0) {
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