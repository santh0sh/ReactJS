import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/bankActions';
import PropTypes from 'prop-types';


class HomePage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      amount: this.props.accountProp.balance
    };
    this.handleChange = this.handleChange.bind(this);
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }

  handleChange(e){
    this.setState({amount:parseInt(e.target.value)});
  }

  deposit(){
    this.props.actionsProp.deposit(this.state.amount);
  }

  withdraw(){
    this.props.actionsProp.withdraw(this.state.amount);
  }

  render(){
    const {account} = this.props.accountProp;
    return (
      <div>

        <h2 >
            <div className="bg-warning">Powered by Redux.</div>      
        </h2>     

        <h1 className="bg-dark text-warning">Current Balance<br/><span
        className={account.balance >= 0 ? "green" : "red"}>
               ${account.balance}</span>
        </h1>


          <div className="bg-info">

            <h1>Make a Deposit</h1>
            Amount ($) :<input type="number" onChange={this.handleChange} /><br/><br/>
            <button className="green" onClick={this.deposit}
               >Deposit</button>
          </div>
          <div className="bg-warning">

            <h1>Make a Withdrawal</h1>
            Amount ($): <input type="number" onChange={this.handleChange} /><br/><br/>
            <button className="red" onClick={this.withdraw} 
            >Withdraw</button>
          </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  accountProp: PropTypes.object.isRequired,
  actionsProp: PropTypes.object
};

function mapStateToProps(state) {
  return {
    accountProp: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionsProp: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
