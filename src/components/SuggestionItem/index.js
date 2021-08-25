import './index.css'

const SuggestionItem = props => {
  const {eachList, transValue} = props
  const {suggestion} = eachList

  const searchValue = () => {
    transValue(suggestion)
  }

  return (
    <li className="list">
      {suggestion}
      <div>
        <img
          alt="arrow"
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          onClick={searchValue}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
