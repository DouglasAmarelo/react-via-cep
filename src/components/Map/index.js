import React from 'react';
import * as S from './styled';

const Map = ({ setCloseMap }) => {

	return(
		<S.Map>
			<S.MapClose
				title="Fechar mapa"
				onClick={() => setCloseMap(true)}
			>
				Fechar Mapa
			</S.MapClose>
		</S.Map>
	);
};

export default Map;