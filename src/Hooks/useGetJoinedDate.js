const useGetJoinedDate = (datePosted) => {
	const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep,', 'Oct', 'Nov', 'Dec']
	const date = new Date(datePosted)

	return `${month[date.getMonth()]} ${date.getFullYear()}`
}

export default useGetJoinedDate