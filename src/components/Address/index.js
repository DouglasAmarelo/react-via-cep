import React from 'react';
import * as S from './styled';

const Address = ({ bairro, cep, localidade, uf, logradouro }) => {
	return(
		<S.Adress>
			<S.AdressTitle>
				{logradouro}
			</S.AdressTitle>
			<p>{bairro}</p>
			<p>{localidade} - {uf}</p>
			<p>{cep}</p>
		</S.Adress>
	);
};

export default Address;