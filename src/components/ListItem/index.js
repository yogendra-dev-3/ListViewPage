import './index.css'

const ListItem = props => {
  const {details} = props
  const {id, avatar, firstName} = details
  return (
    <li className="list-item">
      <div className="avatar-container">
        <button type="button" className="button">
          {id}
        </button>
        <img src={avatar} alt="avatar" className="avatar" />
      </div>
      <p className="first-name">{firstName}</p>
    </li>
  )
}

export default ListItem
