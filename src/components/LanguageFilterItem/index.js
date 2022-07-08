import './index.css'

const LanguageFilterItem = props => {
  const {LanguageFilterItemDetails, ClickOnLanguage} = props
  const {id, language} = LanguageFilterItemDetails

  const languageFilter = () => {
    ClickOnLanguage(id)
  }

  return (
    <li className="button_container">
      <button type="button" onClick={languageFilter}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
