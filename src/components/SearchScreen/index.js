import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import SearchData from './SearchData';
const SearchScreen = ({ searchTerm, anyData, setSearch,openVoiceSearch }) => {
    const Navigate = useNavigate();
    console.log(anyData);
    useEffect(() => {
        if (searchTerm === "") {
            Navigate("/");
        }
    }, [Navigate, searchTerm])
    return (
        <>
            <Header searchTerm={searchTerm} setSearch={setSearch} openVoiceSearch={openVoiceSearch}/>
            <div className='container'>
                <div className='row'>
                    <SearchData anyData={anyData} />
                </div>
            </div>
        </>
    )
}

export default SearchScreen