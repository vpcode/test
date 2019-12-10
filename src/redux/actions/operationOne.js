import StellarSdk from 'stellar-sdk'
const server = new StellarSdk.Server('https://horizon.stellar.org');

export const fetchOperationSuccess = (operation) => ({
    type: 'OPERATION_FETCH_SUCCESS',
    operation
})

export const getOperation = (opid) => {
  return (dispatch) => {
    server.operations()
      .operation(opid)
      .call()
      .then(function (operationResult) {
        dispatch(fetchOperationSuccess(operationResult))
      })
      .catch(function (err) {
        console.log(err)
    })
  }
};
