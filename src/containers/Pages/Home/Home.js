import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTransactions } from '../../../redux/actions/transactionsForAccount';
import { getOperations } from '../../../redux/actions/operationsForTransaction';
import { getOperation } from '../../../redux/actions/operationOne';

class Home extends Component {

  componentDidMount() {
    const account = 'GBXUAEZMR5LPUWZQOCLPUGAL25OK32A4FVGWJTX6GLUYNIGGBAXQZ7IU'
    this.props.fetchTransactions(account)
  }

  getOperationsForId(txid) {
    this.props.fetchOperations(txid)
  }

  getOneOperation(opid) {
    this.props.fetchOperation(opid)
  }

  render() {
    console.log('operation', this.props.operation);

    return (
      <div>
        <h3>Transactions: </h3>
        <ul>
          {this.props.transactions.map((item, index) => (
            <li key={index}>
              <a href="#"
                onClick={() => this.getOperationsForId(item.id)}>ID: {item.id}
              </a>
            </li>
          ))}
        </ul>

        <hr/>
        <h3>Operations: </h3>
        <ul>
          {this.props.operations.map((item, index) => (
            <li key={index}>
              <a href="#"
                onClick={() => this.getOneOperation(item.id)}>ID: {item.id}
              </a>
            </li>
          ))}
        </ul>

        <hr/>
        <h3>One Operation: </h3>
        {this.props.operation && (
          <ul>
            <li>id: {this.props.operation.id}</li>
            <li>created_at: {this.props.operation.created_at}</li>
            <li>type: {this.props.operation.type}</li>
            <li>transaction_hash: {this.props.operation.transaction_hash}</li>
          </ul>
       )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions,
    operations: state.operations,
    operation: state.operation
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTransactions: url => dispatch(getTransactions(url)),
    fetchOperations: txid => dispatch(getOperations(txid)),
    fetchOperation: opid => dispatch(getOperation(opid)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
