import React, {useState} from 'react'

const CovidData = () => {

    const URL = 'https://disease.sh/v3/covid-19/countries/'

    const [search, setSearch] = useState('')
    const [covid19, setCovid19] = useState({})

    const getCountry = () => {
        fetch(`${URL}${search}`)
        .then(response => response.json())
        .then(data => setCovid19(data))
    }

    const inputEnter = (event) => {
        if(event.key === 'Enter'){
            getCountry();
        }
    }

    return(
        <div>
            <div className='divTextArea'>
                <h4 style={{fontWeight: 'bold'}}>Ülke Giriniz</h4>
                <input
                    type='text'
                    placeholder='Ülke Giriniz'
                    onChange={(event) => setSearch(event.target.value)}
                    onKeyDown={inputEnter}
                />
                {
                    search == null ?
                        <button type='button' >Ara</button> :
                        <button type='button' onClick={getCountry}>Ara</button>
                }
            </div>
                {
                    typeof covid19.countryInfo != 'undefined' ?
                        <div className='divOrtala'>
                            <div className='div'>
                                <div className='div1'>
                                    <div className='divBayrak'>
                                        <img className='img' src={covid19.countryInfo.flag} alt={covid19.countryInfo.iso2}/>
                                        <h2 className='h2'>{covid19.country} / {covid19.continent}</h2>
                                    </div>
                                    <div className='div2'>
                                        <h4>VAKA SAYISI (BUGÜN)</h4>
                                        <h3>{covid19.todayCases}</h3>
                                    </div>
                                    <div className='div3'>
                                        <h4>VEFAT SAYISI (BUGÜN)</h4>
                                        <h3>{covid19.todayDeaths}</h3>
                                    </div>
                                    <div className='div2'>
                                        <h4>İYİLEŞEN SAYISI (BUGÜN)</h4>
                                        <h3>{covid19.todayRecovered}</h3>
                                    </div>
                                    <div className='div3'>
                                        <h4>AKTİF VAKA SAYISI</h4>
                                        <h3>{covid19.active}</h3>
                                    </div>
                                    <div className='div2'>
                                        <h4>TOPLAM VAKA SAYISI</h4>
                                        <h3>{covid19.cases}</h3>
                                    </div>
                                    <div className='div3'>
                                        <h4>TOPLAM VEFAT SAYISI</h4>
                                        <h3>{covid19.deaths}</h3>
                                    </div>
                                    <div className='div2'>
                                        <h4>TOPLAM İYİLEŞEN SAYISI</h4>
                                        <h3>{covid19.recovered}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        ''
                }
                <br />
                <br />
        </div>
    )
}

export default CovidData