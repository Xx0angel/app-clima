import '../styles/App.css'
import Form from './Form'
import Weatherinfo from './Weatherinfo'

function Card() {
    return (
        <div className="card">
            <Form/>
            <div className="date">
                <p className='date__local'>Miercoles, 01 FEB 2023 | Hora local: 02:50 AM</p>
            </div>
            <div className='card__box'>
                <div className="card__content">
                    <div className="card__weather">
                        <h2 className='card__weather-city'> CDMX</h2>
                        <p className="card__weather-temp">22°C </p>
                        <p className="card__weather-main">Nublado</p>
                    </div>
                    
                    <div className="card__info">
                        <Weatherinfo title="Sensacion Termica" information="9°C"/>
                        <Weatherinfo title="Humedad" information="50%"/>
                        <Weatherinfo title="Precipitaciones" information="13%"/>
                        <Weatherinfo title="Viento" information="13 Km/h"/>
                    </div>
                    <div className="general__info">
                        <h3 className='info'>Amanecer: 6:15 AM | Atardecer: 7:28 PM | 9°C / 28°C</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card