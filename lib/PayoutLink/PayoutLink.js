module.exports = PayoutLink = {
  create: async function (delivery, amount, payee) {
    var data = {
      amount,
      delivery,
      payee,
    };
    try {
      var data = await this.request(
        'POST',
        '/payouts/create_payout_link',
        data
      );
      if (data.success) {
        return data.payout_link;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw error;
    }
  },
};
