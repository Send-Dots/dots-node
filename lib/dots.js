import requestImport from "./request.js"
import InvoiceImport from "./Invoice/Invoice.js"
import UserImport from "./User/User.js"

const apiBaseDefault = 'https://pls.senddots.com/api'

export default class Dots {
    constructor(clientId, apiKey, apiBase = apiBaseDefault) {
        this.apiKey = apiKey
        this.clientId = clientId
        this.apiBase = apiBase
    }

    request = requestImport.bind(this)

    Invoice = {
        create: InvoiceImport.create.bind(this),
        get: InvoiceImport.get.bind(this)
    }

    User = {
        create: UserImport.create.bind(this),
        get: UserImport.get.bind(this),
        sendVerificationToken: UserImport.sendVerificationToken.bind(this),
        verifyUser: UserImport.verifyUser.bind(this),
        getWallet: UserImport.getWallet.bind(this),
        generateRefillLink: UserImport.generateRefillLink.bind(this),
        generatePayoutLink: UserImport.generatePayoutLink.bind(this),
        getTransactions: UserImport.getTransactions.bind(this),
    }

    Transaction = {
        create: TransactionImport.create.bind(this),
        get: TransactionImport.get.bind(this),
    }
}