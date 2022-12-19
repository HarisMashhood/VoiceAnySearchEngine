import React from 'react'
import { Link } from 'react-router-dom'
const SearchSubHeader = () => {
    return (
        <div className='container-fluid px-5 py-3 border-bottom'>
                <div className='col-md-6' style={{marginLeft:'8%'}} >
                    <ul className='nav'>
                        <li className='nav-item'>
                            <Link to='/' className='d-flex align-items-center nav-link justify-content-between text-dark'>
                                <i className='fa fa-search ml-2'> All</i>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='d-flex align-items-center nav-link justify-content-between text-dark'>
                                <i className='fa fa-map-marker ml-2'> Maps</i>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='d-flex align-items-center nav-link justify-content-between text-dark'>
                                <i className='fa fa-play ml-2'> Videos</i>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='d-flex align-items-center nav-link justify-content-between text-dark'>
                                <i className='fa fa-image ml-2'> Images</i>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='d-flex align-items-center nav-link justify-content-between text-dark'>
                                <i className='fa fa-newspaper-o ml-2'> News</i>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='d-flex align-items-center nav-link justify-content-between text-dark'>
                                <i className='fa fa-bars ml-2'> More</i>
                            </Link>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default SearchSubHeader