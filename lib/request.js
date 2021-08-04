const axios = require('axios')

module.exports = async function request(method, url, data, options = null) {
    
    url = this.apiBase + url


    if (options === null) {
        options = {}
    }

    if (method === 'GET') {
        try {
            const response = await axios.get(
                url,
                {
                    ...options,
                    auth: {
                        username: this.clientId,
                        password: this.apiKey
                    }
                }
            )
            return response.data
        } catch (error) {
            throw error
        }
    } else if (method === 'POST') {
        try {
            const response_1 = await axios.post(
                url,
                data,
                {
                    ...options,
                    auth: {
                        username: this.clientId,
                        password: this.apiKey
                    }
                }
            )
            return response_1.data
        } catch (error_1) {
            throw error_1
        }
    }
}