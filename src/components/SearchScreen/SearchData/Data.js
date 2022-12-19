import React from 'react'
import { Link } from 'react-router-dom'

const Data = ({ data }) => {
    return (
        <div className='col-md-12' style={{textDecoration:'none'}}>
            <Link to={data.displayLink} style={{textDecoration:'none',color:'#000'}}>{data.displayLink}</Link>
            {" "} <i className='fa fa-angle-down'></i>
            <Link to={data.formattedUrl} style={{textDecoration:'none', color:'#009A17' }}><h3>{data.title}</h3></Link>
            <p>{data.snippet}</p>
        </div>
    )
}

export default Data