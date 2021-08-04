import Dots from '../lib/dots.js'
import assert from 'assert'


// Get keys from https://senddotssandbox.com

const clientId = ''
const apiKey = ''
const apiBase = 'https://pls.senddotssandbox.com/api'

describe('init', function () {
    it('init', function () {
        var dots = new Dots(clientId, apiKey, apiBase)
    })
})

describe('invoice', function () {
    it('create', async function () {
        var dots = new Dots(clientId, apiKey, apiBase)
        var invoice = await dots.Invoice.create(100)
        assert.strictEqual(invoice.status, 'created')
        var invoiceId = invoice.id
        var invoice2 = await dots.Invoice.get(invoiceId)
        delete invoice['link']
        assert.deepStrictEqual(invoice, invoice2)

    })
})

describe('user', function () {
    it('create', async function () {
        var dots = new Dots(clientId, apiKey, apiBase)
        var user = await dots.User.create()
    })
})

