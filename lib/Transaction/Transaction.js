module.exports = Transaction = {
    create: async function (userId, amount, receipt=null, breakdown=null, notes=null, allow_debit=false) {
        
        receipt.breakdown = breakdown
        
        var data = {
            user_id: userId,
            amount: amount,
            receipt: receipt,
            notes: notes,
            allow_debit: allow_debit
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
