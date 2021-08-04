module.exports = Transaction = {
    create: async function (email, countryCode, phoneNumber, firstName, lastName, username = null) {
        
        var data = {
            email: email,
            country_code: countryCode,
            phone_number: phoneNumber,
            first_name: firstName,
            last_name: lastName,
        }

        if (username !== null)
            data.username = username
        
        try {
            var data = await this.request('POST', '/users/create', data)
            if (data.success) {
                return data.data.user_id
            } else {
                throw new Error(data.message)
            }
        } catch (error) {
            throw error
        }
        
    },
    get: async function (transactionId) {
        try {
            var data = await this.request('GET', '/transactions/get/transaction/' + transactionId)
            if (data.success) {
                return data.transaction
            } else {
                throw new Error(data.message)
            }
        } catch (error) {
            throw error
        }
    }
}
