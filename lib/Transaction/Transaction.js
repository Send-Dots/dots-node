module.exports = Transaction = {
    create: async function (userId, amount, reciept=null, breakdown=null) {
        
        var data = {
            userId: userId,
            amount: amount,
            reciept: reciept,
            breakdown: breakdown
        }
        
        try {
            var res = await this.request('POST', '/transactions/create', data)
            if (res.success) {
                return res.transaction
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
