import styled from 'styled-components';

// Form
export const formCep = styled.form`
	display: flex;
	justify-content: space-between;
`;

export const formCepInput = styled.input.attrs({ type: 'text' })`
		border: 1px solid #ccc;
		padding: .7em 1em;
		width: 100%;

		&:hover { border-color: #9c9c9c; }
`;

export const formCepButton = styled.button.attrs({ type: 'submit' })`
	margin-left: .5em;
	padding: .7em 1em;
`;

export const formCepError = styled.div`
	color: #fd3f3f;
	font-size: 14px;
	margin-top: 1em;

	&:empty { display: none; }
`;