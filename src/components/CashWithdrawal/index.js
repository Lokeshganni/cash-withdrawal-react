// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {cash: 2000}

  amountDeduct = value => {
    const {cash} = this.state
    if (cash - value + 1 > 0) {
      this.setState(prevState => ({cash: prevState.cash - value}))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {cash} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <div className="name-card">
            <div className="name-logo-circle">
              <p className="name-para">S</p>
            </div>
            <h1 className="name-heading">Sarah Williams</h1>
          </div>
          <div className="balance-card">
            <p className="your-balance">Your Balance</p>
            <div className="rupees-card">
              <p className="amount">{cash}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw">Withdraw</p>
            <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="ul-container">
            {denominationsList.map(each => (
              <DenominationItem
                amountDeduct={this.amountDeduct}
                denominationItem={each}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
