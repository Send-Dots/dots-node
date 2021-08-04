const Invoice = {
    create: async function (amount, expiresIn=null, items=null, breakdown=null, requestedInformation=null) {
        var data = {
            amount: amount
        }

        if (expiresIn !== null)
            data.expires_in = expiresIn
        
        if (items !== null)
            data.items = items
        
        if (breakdown !== null)
            data.breakdown = breakdown
        
        if (requestedInformation !== null)
            data.requested_information = requestedInformation
        
        try {
            var data = await this.request('POST', '/invoice/create', data)
            if (data.success) {
                return data.invoice
            } else {
                throw new Error(data.message)
            }
        } catch(error) {
            throw error
        }
        
    },
    get: async function (invoiceId) {
        try {
            var data = await this.request('GET', '/invoice/get/' + invoiceId)
            if (data.success) {
                return data.invoice
            } else {
                throw new Error(data.message)
            }
        } catch (error) {
            throw error
        }
    }
}

export default Invoice