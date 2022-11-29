const API_LINK = 'http://localhost:8000'

const getMostRatingCards = async () => {
	return fetch(API_LINK + '/product?sort=(stars:desc)', {
		method: 'GET'
	})
		.then(response => response.json())
		.catch(err => {
			console.error('API ERROR: ', err)
			return err
		})
}

export { getMostRatingCards }
