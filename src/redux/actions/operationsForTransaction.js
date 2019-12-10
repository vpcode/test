import StellarSdk from 'stellar-sdk'
const server = new StellarSdk.Server('https://horizon.stellar.org');

export const fetchOperationsSuccess = (operations) => ({
    type: 'OPERATIONS_FETCH_SUCCESS',
    operations
})

export function getOperations(txid) {

  return (dispatch) => {

    server.operations()
      .forTransaction(txid)
      .call()
      .then(function (operationsResult) {
        console.log(operationsResult.records);

        dispatch(fetchOperationsSuccess(operationsResult.records))
      })
      .catch(function (err) {
        console.log(err)
    })
  }
};
