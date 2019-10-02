import styled from 'styled-components';

export const Map = styled.div`
	background-color: #ccc;
	border: 1px solid #ccc;
	height: 400px;
	margin-top: 2em;
`;

export const MapClose = styled.button`
	background-color: transparent;
	border: none;
	border-radius: 40px;
	cursor: pointer;
	height: 40px;
	position: absolute;
	right: 0;
	top: 0;
	width: 40px;
	font-size: 0;

	&:before {
		content: 'x';
		font-size: 16px;
		font-weight: bold;
		left: 50%;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
	}
`;