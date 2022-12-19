import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const SearchHeader = ({ searchTerm, setSearch, openVoiceSearch }) => {
    const [searchText, setSearchText] = useState('')
    useEffect(() => {
        setSearchText(searchTerm)
    }, [searchTerm])
    const handleSubmit = (e) => {
        e.preventDefault();
        //dataValidating
        if (/^[a-zA-Z0-9].*/.test(searchText) || /^[a-zA-Z0-9]+" ".*/.test(searchText)) {
            setSearch(searchText)
        }
    }
    const handleButton = () => {
        if (/^[a-zA-Z0-9].*/.test(searchText) || /^[a-zA-Z0-9]+" ".*/.test(searchText)) {
            setSearch(searchText)
        }
    }
    const clearInput = () => {
        setSearchText('')
    }
    return (
        <div className='col-md-12 py-3 d-flex flex-column align-items-center'>
            <Link to='/' className='mx-5' style={{ outline: 'none', textDecoration: 'none', color: '#009A17' }}>
                <h2>AnySearchEngine</h2>
            </Link>
            <div className='col-md-4 d-flex align-items-center justify-content-around border ml-3'>
                <form style={{ width: '87%' }} onSubmit={handleSubmit}>
                    <input type='text' value={searchText} className='form-control border-0 mr-2' style={{ outline: 'none', boxShadow: 'none' }}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />
                </form>
                {searchText ? (<i className='fa fa-times' onClick={clearInput} style={{ cursor: 'pointer' }}></i>) : null}


                <i className='fa fa-search' onClick={handleButton} style={{ cursor: 'pointer' }}></i>
            </div>
            <ul className='nav ml-auto mr-5'>
                <li className='nav-item'><a href='#' alt='apps' className='nav-link'>
                    <i className='fa fa-th' style={{ color: '#000' }}></i>
                </a></li>
                <li className='nav-item'><a href='#' alt='apps' className='nav-link'>
                <i className='fa fa-microphone' onClick={()=>openVoiceSearch()} style={{ cursor: 'pointer', color:'red' }}></i>
                </a></li>
                <li className='nav-item'><a href='#' alt='apps' className='nav-link'>
                    <i className='fa fa-user' style={{ color: '#000' }}></i>
                </a></li>
            </ul>
        </div>
    )
}

export default SearchHeader