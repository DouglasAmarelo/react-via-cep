import React from 'react';
import * as S from './styled';

const Footer = () => {
	return(
		<S.Footer>
			Made by
			<S.Link href="https://douglasamarelo.com" title="Douglas Amarelo Lopes" >
				Douglas Lopes
			</S.Link>
			<br />
			with <S.Heart>
				<span role="img" aria-label="love"> 🧡 </span>
			</S.Heart>,
			<S.Link href="https://pt-br.reactjs.org" title="React">
				React
			</S.Link>
			and hosted at
			<S.Link href="https://www.netlify.com" title="netlify">
				netlify
			</S.Link>
		</S.Footer>
	);
};

export default Footer;