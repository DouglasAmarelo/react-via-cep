import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import getDataFromApi from '../../services/api';
import MapMarker from '../MapMarker';

import * as S from './styled';

const Map = ({ setCloseMap, addressInfo: { logradouro } }) => {
	const GM_API_K      = `AIzaSyD-8H_N7vrRpRt54CzyAHaNPY_t-JD1Nv4`;
	const [mapLocation, setMapLocation] = useState(null);

	useEffect(() => {
		// Get information from Google Maps
		const getGeoLocation = address => getDataFromApi(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GM_API_K}`);

		getGeoLocation(logradouro).then(mapLocationData => {
			const geoLocation = mapLocationData.results[0].geometry.location;

			setMapLocation(geoLocation);
		});
	}, [logradouro]);


	return(
		<>
			{mapLocation && (
				<S.Map>
					<S.MapClose
						title="Fechar mapa"
						onClick={() => setCloseMap(true)}
					>
						Fechar Mapa
					</S.MapClose>

					<div className="w100 h100">
						<GoogleMapReact
							bootstrapURLKeys={{ key: GM_API_K }}
							center={mapLocation}
							defaultZoom={16}
						>
							<MapMarker
								lat={mapLocation.lat}
								lng={mapLocation.lng}
								text="Opa!"
							/>
						</GoogleMapReact>
					</div>

					<p>{ console.log(logradouro, mapLocation, mapLocation.lat, mapLocation.lng) }</p>
				</S.Map>
			)}
		</>
	);
};

export default Map;