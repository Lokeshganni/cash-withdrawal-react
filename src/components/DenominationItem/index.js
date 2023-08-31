// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationItem, amountDeduct} = props
  const {value} = denominationItem
  const onClickBtn = () => {
    amountDeduct(value)
  }
  return (
    <li className="edo">
      <button onClick={onClickBtn} className="li-container">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
