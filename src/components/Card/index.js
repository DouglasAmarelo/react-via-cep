import React from 'react';
import * as S from './styled';

const Card = ({ title, children }) => {
	return(
		<S.Card>
			{title && (
				<S.CardTitle>{ title }</S.CardTitle>
			)}

			{children}
		</S.Card>
	);
};

export default Card;