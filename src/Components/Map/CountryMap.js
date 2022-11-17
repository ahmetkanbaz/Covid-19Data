import React from 'react'
import Taiwan from "@svg-maps/world";
import { CheckboxSVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import { getLocationName } from '../../utils';
import 'bootstrap/dist/css/bootstrap.css'
import {Row, Col} from 'reactstrap'
import CountryCovidInfo from './CountryCovidInfo';

class CountryMap extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pointedLocation: null,
			focusedLocation: null,
		};

		this.handleLocationMouseOver = this.handleLocationMouseOver.bind(this);
		this.handleLocationMouseOut = this.handleLocationMouseOut.bind(this);
		this.handleLocationFocus = this.handleLocationFocus.bind(this);
	}

	handleLocationMouseOver(event) {
        event.stopPropagation();
		const pointedLocation = getLocationName(event);
		this.setState({ pointedLocation: pointedLocation });
	}

	handleLocationMouseOut() {
		this.setState({ pointedLocation: null });
	}

	handleLocationFocus(event) {
        event.stopPropagation();
		const focusedLocation = getLocationName(event);
		this.setState({ focusedLocation: focusedLocation });
	}

	render() {
		return (
			<div style={{marginTop: '1%'}}>
                <Row>
					<Col xs = '9'>
						<h5 style={{textAlign: 'center'}}>WORLD MAP</h5>
					<CheckboxSVGMap
                                map={Taiwan}
                                onLocationMouseOver={this.handleLocationMouseOver}
                                onLocationMouseOut={this.handleLocationMouseOut}
                                onLocationFocus={this.handleLocationFocus}
                            />
						<div>
							<h6>Seçilecek Olan Ülke: {this.state.pointedLocation}</h6>
							<h6>Son Olarak Seçilen Ülke: {this.state.focusedLocation}</h6>
							{
								this.state.focusedLocation != null ?
								<button type='button' className='buttonSecimKaldir' onClick={() => this.setState({focusedLocation: null})}>Seçimi Kaldır</button>
								:
								''
							}
						</div>
					</Col>
					<Col xs = '3'>
						<CountryCovidInfo countryName = {this.state.focusedLocation}/>
					</Col>
                            
            	</Row>
            </div>
		);
	}
}

export default CountryMap