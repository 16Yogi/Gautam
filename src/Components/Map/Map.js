import React from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map() {
    const defaultProps = {
        center: {
            lat: 59.95, // Initial latitude
            lng: 30.33, // Initial longitude
        },
        zoom: 11, // Initial zoom level
    };
    return (
        <>
            <div style={{ height: '400px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'YOUR_API_KEY' }} // Replace with your Google Maps API Key
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="Your Marker Text"
                    />
                </GoogleMapReact>
            </div>
        </>
    )
}
