import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  transValue = value => {
    this.setState({searchInput: value})
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const filterResult = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(searchInput)

    return (
      <div className="bg-container">
        <img
          alt="google logo"
          className="google"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />

        <div className="bottom-list">
          <div className="search-bar">
            <img
              className="search-icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search Google"
              onChange={this.onChangeSearch}
              value={searchInput}
            />
          </div>
          <ul className="list-items">
            {filterResult.map(eachItem => (
              <SuggestionItem
                eachList={eachItem}
                key={eachItem.id}
                transValue={this.transValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
