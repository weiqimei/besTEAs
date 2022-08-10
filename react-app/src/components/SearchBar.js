import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { searchBobaShops } from '../store/search';

import './SearchBar.css'

function SearchBar() {
  const dispatch = useDispatch()
  const history = useHistory();
  const bobaShops = useSelector(state => state?.searchReducer?.entries);

  const bobaShopNames = bobaShops?.bobaShops?.map(bobaShop => bobaShop.name)

  console.log(bobaShopNames, 'THIS IS BOBASHOPNAMES ')


  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  console.log(searchResults, 'THIS IS SEARCH RESULTS -----------')

  useEffect(() => {
    let results

    if (bobaShops === {}) {
      dispatch(searchBobaShops())
      results = bobaShops?.bobaShops?.filter(bobaShop => bobaShop?.name?.toLowerCase().includes(search?.toLowerCase()))
      setSearchResults(results)
    }

    if (!results || search === '') {
      setSearchResults('')
    }

    if (search) {
      results = bobaShops?.bobaShops?.filter(bobaShop => bobaShop?.name?.toLowerCase().includes(search?.toLowerCase()))
      setSearchResults(results)
    }
  }, [search])


  useEffect(() => {
    dispatch(searchBobaShops())
  }, [])

  return (
    <>
      <div className='search-bar-container'>
        <input
          type='text'
          name='search-bar'
          placeholder='Search'
          onChange={e => setSearch(e.target.value)}
          onBlur={() => setSearchResults('')}
          value={search}
        />
        <div className='search-bar-search-results'>
          <div>
            {searchResults?.length > 0 && searchResults?.map(result => (
              <>
                <div
                  className='search-bar-dropdown'
                  key={result.id}
                  onMouseDown={() => {
                    setSearch('')
                    setSearchResults([])
                    history.push(`/bobaShops/${result.bobaShopId}`)
                  }}>
                  <p>
                    {result.name}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchBar
