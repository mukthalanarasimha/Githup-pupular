import './index.css'

const RepositoryItem = props => {
  const {RepositoryItemDetails} = props
  const {
    name,
    imageUrl,
    startCount,
    forksCount,
    issueCount,
  } = RepositoryItemDetails

  return (
    <li className="item_list">
      <div>
        <img src={imageUrl} alt={name} className="logo_image" />
        <h1 className="name_item">{name}</h1>
        <div className="image_logo_symbol">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="logo_start"
          />
          <p className="paragragh_name">{startCount}:stars</p>
        </div>
        <div className="image_logo_symbol">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="logo_start"
          />
          <p className="paragragh_name">{forksCount}:forks</p>
        </div>
        <div className="image_logo_symbol">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="logo_start"
          />
          <p className="paragragh_name">{issueCount}:open issue</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
