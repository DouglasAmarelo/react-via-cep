import React from 'react';
import * as S from './styled';

const Card = ({ title, children, closeCard }) => {
	return(
		<S.Card closeCard={closeCard}>
			{title && (
				<S.CardTitle>{ title }</S.CardTitle>
			)}

			{children}
		</S.Card>
	);
};

export default Card;