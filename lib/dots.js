const request = require('./request');
const Invoice = require('./Invoice/Invoice');
const PayoutLink = require('./PayoutLink/PayoutLink');
const User = require('./User/User');
const Transaction = require('./Transaction/Transaction');

const apiBaseDefault = 'https://pls.senddots.com/api';

module.exports = class Dots {
  constructor(clientId, apiKey, apiBase = apiBaseDefault) {
    this.apiKey = apiKey;
    this.clientId = clientId;
    this.apiBase = apiBase;
  }

  request = request.bind(this);

  Invoice = {
    create: Invoice.create.bind(this),
    get: Invoice.get.bind(this),
  };

  PayoutLink = {
    create: PayoutLink.create.bind(this),
  };

  User = {
    create: User.create.bind(this),
    get: User.get.bind(this),
    sendVerificationToken: User.sendVerificationToken.bind(this),
    verifyUser: User.verifyUser.bind(this),
    getWallet: User.getWallet.bind(this),
    generateRefillLink: User.generateRefillLink.bind(this),
    generatePayoutLink: User.generatePayoutLink.bind(this),
    getTransactions: User.getTransactions.bind(this),
    generatePayoutLinkUnverified: User.generatePayoutLinkUnverified.bind(this),
    getByVerificationId: User.getByVerificationId.bind(this),
  };

  Transaction = {
    create: Transaction.create.bind(this),
    get: Transaction.get.bind(this),
    createAchPayment: Transaction.create_ach_payment.bind(this),
    createUnverified: Transaction.createUnverified.bind(this),
  };
};
