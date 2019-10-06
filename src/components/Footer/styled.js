import styled from 'styled-components';

export const Footer = styled.footer`
	background-color: #fff;
	bottom: 0;
	box-shadow: inset 0 3px 4px 0 rgba(0, 0, 0, .150);
	font-family: 'Arial';
	font-size: 12px;
	left: 0;
	padding: 1.25em 5%;
	position: fixed;
	text-align: center;
	width: 100%;
`;

export const Link = styled.a`
	color: #f7630c;
	display: inline-block;
	padding: 0 5px;
`;

export const Heart = styled.span`
	animation: pulse 1s infinite;
	display: inline-block;

	@keyframes pulse {
		0%   { transform: scale(1); }
		25%  { transform: scale(1.15); }
		100% { transform: scale(1); }
	}
`;