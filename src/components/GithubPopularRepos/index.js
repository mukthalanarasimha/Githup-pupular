import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    languageListr: [],
    activeApiList: languageFiltersData[0].id,
    spinnerStatus: true,
  }

  componentDidCatch() {
    this.getLanguageData()
  }

  getLanguageData = async () => {
    const {activeApiList} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${activeApiList}`,
    )
    if (response.ok === true) {
      const fetchdata = await response.json()
      const updatedata = fetchdata.popular_repos.map(eachRespo => ({
        name: eachRespo.name,
        imageUrl: eachRespo.avatar_url,
        startCount: eachRespo.stars_count,
        forksCount: eachRespo.forks_count,
        issueCount: eachRespo.issues_count,
      }))
      this.setState({languageListr: updatedata, spinnerStatus: false})
    }
  }

  ClickOnLanguage = id => {
    this.setState({activeApiList: id}, this.getLanguageData)
  }

  render() {
    const {languageListr, spinnerStatus} = this.state
    return (
      <div className="gitHubContainer">
        <h1>Popular</h1>
        <ul className="Button_container">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              key={eachLanguage.id}
              LanguageFilterItemDetails={eachLanguage}
              ClickOnLanguage={this.ClickOnLanguage}
            />
          ))}
        </ul>
        {spinnerStatus ? (
          <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
        ) : (
          <ul className="language_list">
            {languageListr.map(eachRepo => (
              <RepositoryItem
                key={eachRepo.id}
                RepositoryItemDetails={eachRepo}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
