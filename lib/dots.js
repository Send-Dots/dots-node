const request = require("./request")
const Invoice = require("./Invoice/Invoice")
const User = require("./User/User")
const Transaction = require("./Transaction/Transaction")

const apiBaseDefault = 'https://pls.senddots.com/api'

module.exports = class Dots {
    constructor(clientId, apiKey, apiBase = apiBaseDefault) {
        this.apiKey = apiKey
        this.clientId = clientId
        this.apiBase = apiBase
    }

    request = request.bind(this)

    Invoice = {
        create: Invoice.create.bind(this),
        get: Invoice.get.bind(this)
    }

    User = {
        create: User.create.bind(this),
        get: User.get.bind(this),
        sendVerificationToken: User.sendVerificationToken.bind(this),
        verifyUser: User.verifyUser.bind(this),
        getWallet: User.getWallet.bind(this),
        generateRefillLink: User.generateRefillLink.bind(this),
        generatePayoutLink: User.generatePayoutLink.bind(this),
        getTransactions: User.getTransactions.bind(this),
    }

    Transaction = {
        create: Transaction.create.bind(this),
        get: Transaction.get.bind(this),
    }
}