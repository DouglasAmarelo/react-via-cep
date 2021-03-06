import styled from 'styled-components';

// Card
export const Card = styled.section`
	background-color: #fff;
	box-shadow: 0 5px 5px 0 rgba(0, 0, 0, .150);
	display: ${props => props.closeCard ? 'none' : 'block'};
	margin: 2em auto;
	max-width: 700px;
	padding: 2em;
	position: relative;
	transition: box-shadow .1s linear;
	width: 90%;
	will-change: box-shadow;
	z-index: 100;

	&:hover { box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .260); }

	&:empty { display: none; }
`;

// Card title
export const CardTitle = styled.h1`
	font-size: 22px;
	line-height: 18px;
	margin: 0 0 1em 0;
	padding: 0;
	text-transform: uppercase;
`;