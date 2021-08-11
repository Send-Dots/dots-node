module.exports = User = {
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
                return data.verification_id
            } else {
                throw new Error(data.message)
            }
        } catch (error) {
            throw error
        }
        
    },
    get: async function (userId) {
        try {
            var data = await this.request('GET', '/users/get/' + userId)
            if (data.success) {
                return data.user
            } else {
                throw new Error(data.message)
            }
        } catch (error) {
            throw error
        }
    },
    sendVerificationToken: async function (verificationId) {
        try {
            var data = await this.request('POST', '/users/send_verification_token', { verification_id: verificationId })
            if (data.success) {
                return true
            } else {
                throw new Error(data.message)
            }
        } catch (error) {
            throw error
        }
    },
    verifyUser: async function (verificationId, verificationToken) {
        try {
            var data = await this.request('POST', '/users/verify_user', { verification_id: verificationId, verification_token: verificationToken })
            if (data.success) {
                return data.user.id
            } else {
                return false
            }
        } catch (error) {
            throw error
        }
    },
    getWallet: async function (userId) {
        try {
            var data = await this.request('GET', '/users/wallet/get/' + userId)
            if (data.success) {
                return data.wallet
            } else {
                throw new Error(data.message)
            }
        } catch (error) {
            throw error
        }
    },
    generateRefillLink: async function (userId) {
        try {
            var data = await this.request('POST', '/users/wallet/refill', { user_id: userId })
            if (data.success) {
                return data.link
            } else {
                throw new Error(data.message)
            }
        } catch (error) {
            throw error
        }
    },
    generatePayoutLink: async function (userId) {
        try {
            var data = await this.request('POST', '/users/wallet/payout', { user_id: userId })
            if (data.success) {
                return data.link
            } else {
                throw new Error(data.message)
            }
        } catch (error) {
            throw error
        }
    },
    getTransactions: async function (userId) {
        try {
            var data = await this.request('GET', '/transactions/get/user/' + userId)
            if (data.success) {
                return data.transactions
            } else {
                throw new Error(data.message)
            }
        } catch (error) {
            throw error
        }
    }
}
