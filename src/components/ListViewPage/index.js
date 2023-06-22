// Write your code here

import {Component} from 'react'
import ListItem from '../ListItem'
import './index.css'

class ListViewPage extends Component {
  state = {imagesList: [], searchInput: ''}

  componentDidMount() {
    this.getImage()
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getImage = async () => {
    const response = await fetch('https://reqres.in/api/users?page=2')
    const dataSet = await response.json()

    const updatedData = dataSet.data.map(each => ({
      id: each.id,
      avatar: each.avatar,
      firstName: each.first_name,
      lastName: each.last_name,
      email: each.email,
    }))
    this.setState({imagesList: updatedData})
  }
#react
  render() {
    const {imagesList, searchInput} = this.state
    const filterItems = imagesList.filter(each =>
      each.firstName.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <input
          type="search"
          className="search-input"
          placeholder="search Employee"
          onChange={this.onChangeInput}
        />
        <h1 className="employees">Employees</h1>
        <ul className="ul-list">
          {filterItems.map(eachItem => (
            <ListItem details={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default ListViewPage
