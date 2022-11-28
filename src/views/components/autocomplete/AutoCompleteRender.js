// ** React Imports
import { useState } from 'react'
import classnames from 'classnames'

// ** Custom Components
import AutoComplete from '@components/autocomplete'

// ** Images
import img1 from '@src/assets/images/avatars/avatar-blank.png'

const AutoCompleteRender = () => {
  // ** State
  const [suggestions] = useState([
    {
      name: 'Jake Shelton',
      img: img1
    },
    {
      name: 'Edith Baldwin',
      img: img1
    },
    {
      name: 'Jennifer Wolfe',
      img: img1
    },
    {
      name: 'Emily Washington',
      img: img1
    },
    {
      name: 'Heather Green',
      img: img1
    },
    {
      name: 'Brian Moore',
      img: img1
    }
  ])

  return (
    <AutoComplete
      filterKey='name'
      placeholder="Type 'a'"
      className='form-control'
      suggestions={suggestions}
      customRender={(suggestion, i, filteredData, activeSuggestion, onSuggestionItemClick, onSuggestionItemHover) => (
        <li
          key={i}
          onMouseEnter={() => onSuggestionItemHover(filteredData.indexOf(suggestion))}
          className={classnames('suggestion-item', {
            active: filteredData.indexOf(suggestion) === activeSuggestion
          })}
          onClick={e => {
            onSuggestionItemClick(null, e)
          }}
        >
          <img src={suggestion.img} alt={suggestion.name} height='32' width='32' className='me-1' />
          <span>{suggestion.name}</span>
        </li>
      )}
    />
  )
}
export default AutoCompleteRender
