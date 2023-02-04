import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const MapComponent = () => {
	const mapContainerStyle = {
		height: '400px',
		width: '100%'
	};

	const center = {
    lat: 48.692054,
    lng: 6.184417
	};

	return (
    <LoadScript
      googleMapsApiKey="AIzaSyCXnbeSHV_Zjye8nVZoKiqEjJWxvBYLNo0">
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={center}
    >
        <Marker position={center} />
    </GoogleMap>
    </LoadScript>
	);
};