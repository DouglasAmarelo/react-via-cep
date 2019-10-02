import React, { useState } from 'react';
import * as S from './styled';

const Map = () => {
	const [closeMap, setCloseMap] = useState(false);

	return(
		<>
			{!closeMap && (
				<S.Map>
					<S.MapClose
						title="Fechar mapa"
						onClick={() => setCloseMap(true)}
					>
						Fechar Mapa
					</S.MapClose>
				</S.Map>
			)}
		</>
	);
};

export default Map;