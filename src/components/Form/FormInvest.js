import React from 'react';
import './Form.css'

export default class InvestorForm extends React.Component {
  constructor(props) {
    super(props);

   this.state = {
      investor: {
        investedAmount: props.investedAmount,
      }
    }
 }
 handleInvestAmountChanged(event) {
    var investor       = this.state.investor;
    investor.investedAmount  = event.target.value;

   this.setState({ investor: investor });
   }

  handleStatusChanged(event) {
    var investor    = this.state.investor;
    investor.status = event.target.value;
    this.setState({ investor: investor });
    }
handleButtonClicked() {
    var amount= this.state.investor.investedAmount; 
    console.log(amount);
}
render() {
      return (
        <div>
          <label>
            Invest and get an Exclusive NFT
          </label>
          <br></br>
          <input type="number" placeholder='Enter (ETH)' min="0.001"
            value={this.state.investor.investedAmount} 
            onChange={this.handleInvestAmountChanged.bind(this)}/> 
            <button onClick={this.handleButtonClicked.bind(this)}>  INVEST NOW  </button>      
      </div>
    );
  }
}