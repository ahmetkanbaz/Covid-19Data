import React, {useState, useEffect} from 'react'

const CountryCovidInfo = (props) =>{

    const [covid19, setCovid19] = useState({})

    const URL = 'https://disease.sh/v3/covid-19/countries/';
    useEffect(() => {
        if(props.countryName != null){
            fetch(`${URL}${props.countryName}`)
            .then(response => response.json())
            .then(data => setCovid19(data))
        }
        else {
            console.log('Country Name is Null...')
        }
        
    }, [props.countryName])
    return(
        <div>
            {
                props.countryName != null ?
                <table className='styled-table'>
                <thead>
                    <tr>
                        <th colSpan={2}>{covid19.country} / {covid19.continent}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>VAKA SAYISI (BUGÜN)</td>
                        <td>{covid19.todayCases}</td>
                    </tr>
                    <tr>
                        <td>VEFAT SAYISI (BUGÜN)</td>
                        <td>{covid19.todayDeaths}</td>
                    </tr>
                    <tr>
                        <td>İYİLEŞEN SAYISI (BUGÜN)</td>
                        <td>{covid19.todayRecovered}</td>
                    </tr>
                    <tr>
                        <td>AKTİF VAKA SAYISI</td>
                        <td>{covid19.active}</td>
                    </tr>
                    <tr>
                        <td>TOPLAM VAKA SAYISI</td>
                        <td>{covid19.cases}</td>
                    </tr>
                    <tr>
                        <td>TOPLAM VEFAT SAYISI</td>
                        <td>{covid19.deaths}</td>
                    </tr>
                    <tr>
                        <td>TOPLAM İYİLEŞEN SAYISI</td>
                        <td>{covid19.recovered}</td>
                    </tr>
                </tbody>                    
            </table>
            :
            ''
            }
        </div>
    )
}

export default CountryCovidInfo