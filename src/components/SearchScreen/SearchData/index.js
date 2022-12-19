import React from 'react'
import Data from './Data'

const SearchData = ({ anyData }) => {
    return (
        <div className='col-md-12 py-3 px-5 ml-1'>
            <p className='small text-dark'>All {anyData.searchInformation.formattedTotalResults} results found in
                {' '}{anyData.searchInformation.formattedSearchTime} seconds.</p>
            {
                anyData?.items.map((data, id) => {
                    return (
                        <Data data={data} key={id} />
                    )
                })
            }
        </div>
    )
}

export default SearchData