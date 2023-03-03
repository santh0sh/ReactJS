import React, { Component } from 'react'
import './Maps.css'
import GoogleMapReact from 'google-map-react';
// npm install google-map-react --force

const MapsView = ({ text }) => (
    <div style={{
        position: 'relative', color: 'white', background: 'red',
        height: 40, width: 60, top: -20, left: -30, textAlign: 'center', paddingTop: '5px'
    }}>
        {text}
    </div>
);

class Maps extends Component {

    static defaultProps = {
        center: {lat: 17.4423, lng: 78.3758},
        zoom: 11
    };

    render () {
        return (
            <div className="container">
                <p>Google Map view of a location.   Play around with the coordinates to get a different view</p>
                <div className="map-container">
                    <GoogleMapReact
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <MapsView
                            lat={17.4423}
                            lng={78.3758}
                            text={'Your Location'}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}

export default Maps