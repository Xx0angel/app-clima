import React from 'react'

function Weatherinfo({title, information}) {
    return (
        <div className='weather__info-box'>
            <h3 className='weather__info-title'>{title}</h3>
            <p className='weather__info-description'>{information}</p>
        </div>
    )
}

export default Weatherinfo