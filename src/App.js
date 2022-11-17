import React from 'react'
import CountryMap from './Components/Map/CountryMap'
import CovidData from './Components/SearchCountry.js/CovidData'
import 'bootstrap/dist/css/bootstrap.css'
import {Container, Col} from 'reactstrap'

function App() {
  return (
    <div>
      <Container>
        <Col>
            <Col>
              <CountryMap />
            </Col>
            <Col>
              <CovidData />
            </Col>
          </Col>
      </Container>
    </div>
  )
}

export default App