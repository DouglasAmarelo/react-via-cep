import React from 'react';
import * as S from './styled';

const Card = ({ title = 'Lorem Ipsum', children }) => {
	return(
		<S.Card>
			<S.CardTitle>{ title }</S.CardTitle>
			{children}
		</S.Card>
	);
};

export default Card;