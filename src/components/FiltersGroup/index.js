import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderInputSearch = () => {
    const {searchInput} = props
    console.log(searchInput)
    return (
      <div className="input-and-search-container">
        <input
          value={searchInput}
          className="input-container"
          type="search"
          placeholder="Search"
          onKeyDown={onEnterSearchInput}
          onChange={onChangeSearchInput}
        />
        <BsSearch className="react-icon" />
      </div>
    )
  }

  const renderCategoriesList = () => {
    const {categoryOptions} = props
    return categoryOptions.map(eachCategory => {
      const {changeCategory, activeCategoryId} = props
      const isCategoryActive = eachCategory.categoryId === activeCategoryId
      const categoryClassName = isCategoryActive ? 'active' : ''
      const onClickCategory = () => {
        changeCategory(eachCategory.categoryId)
      }
      return (
        <li
          key={eachCategory.categoryId}
          onClick={onClickCategory}
          className={`category-btn-name ${categoryClassName}`}
        >
          <p>{eachCategory.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <>
      <h1 className="heading">Category</h1>
      <ul className="categories-list">{renderCategoriesList()}</ul>
    </>
  )

  const renderRatingsList = () => {
    const {ratingsList} = props
    return ratingsList.map(eachRating => {
      const {activeRatingId, changeRating} = props
      const isRatingActive = eachRating.ratingId === activeRatingId
      const ratingClassName = isRatingActive ? 'active' : ''
      const onClickRating = () => {
        changeRating(eachRating.ratingId)
      }
      return (
        <li
          key={eachRating.ratingId}
          onClick={onClickRating}
          className="rating-and-above-btn"
        >
          <img
            height={30}
            width={200}
            src={eachRating.imageUrl}
            alt={`rating ${eachRating.ratingId}`}
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatings = () => (
    <>
      <h1 className="heading">Ratings</h1>
      <ul className="ratings-list">{renderRatingsList()}</ul>
    </>
  )

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderInputSearch()}
      {renderProductCategories()}
      {renderRatings()}
      <button
        type="button"
        onClick={clearFilters}
        className="clear-filters-btn"
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
