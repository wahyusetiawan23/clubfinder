class DataSource {
    static searchClub(keyword) {
        return fetch(`http://www.omdbapi.com/?apikey=e0bb1fc3&s=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.teams) {
                    return Promise.resolve(responseJson.teams);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            })
    }
}

export default DataSource;