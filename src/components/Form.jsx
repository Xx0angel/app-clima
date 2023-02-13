import React, { useState } from 'react'
// import { UilSearch } from '@iconscout/react-unicons'

function Form() {
    const [city, setCity] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(city)
        if (city === "" || !city) return;
    }

    return (
        <div className="card__search">
            <form onSubmit={onSubmit}>
                <input className="card__search-input" type="text" placeholder="Buscar Ciudad..."
                    onChange={(e) =>setCity(e.target.value)}/>
                <button className='card__search-button' type='submit'><ion-icon name="search-outline"></ion-icon></button>
            </form>
        </div>
    )
}

export default Form