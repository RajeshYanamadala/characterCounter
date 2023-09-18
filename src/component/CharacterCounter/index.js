import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {
    inputValue: '',
    userInputList: [],
  }

  onClickAddBtn = event => {
    event.preventDefault()
    const {inputValue} = this.state
    const newList = {
      id: uuidv4(),
      name: inputValue,
      length: inputValue.length,
    }
    this.setState(prevState => ({
      userInputList: [...prevState.userInputList, newList],
      inputValue: '',
    }))
  }

  onChangeInputValue = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {inputValue, userInputList} = this.state
    const isActive = userInputList.length === 0
    userInputList.map(each => console.log(each.id))

    return (
      <div className="app-container">
        <div className="counter-container">
          <div className="primary-container">
            <div className="title-card">
              <h1 className="primary-page-heading">
                Count the characters like a Boss
              </h1>
            </div>
            {isActive && (
              <div className="image-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
                  alt="no user inputs"
                  className="image"
                />
              </div>
            )}

            <ul>
              {userInputList.map(eachData => (
                <li className="list-card" key={eachData.id}>
                  <p className="list-paragraph">{eachData.name} :</p>
                  <p className="list-paragraph">{eachData.length}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="second-container">
            <h1 className="secondary-page-heading">Character Counter</h1>
            <form onSubmit={this.onClickAddBtn}>
              <input
                type="text"
                className="search"
                value={inputValue}
                placeholder="Enter the Characters here"
                onChange={this.onChangeInputValue}
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
