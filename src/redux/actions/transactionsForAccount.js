import StellarSdk from 'stellar-sdk'
const server = new StellarSdk.Server('https://horizon.stellar.org');

export const fetchTransactionsSuccess = transactions => ({
  type: 'TXS_FETCH_DATA_SUCCESS',
  transactions
})

export function getTransactions(accaunt) {
  return (dispatch) => {

    server.transactions()
      .forAccount(accaunt)
      .call()
      .then(function (accountResult) {
        console.log(accountResult);

        dispatch(fetchTransactionsSuccess(accountResult.records))
      })
      .catch(function (err) {
        console.log('err: ', err);
    })
  }
};
