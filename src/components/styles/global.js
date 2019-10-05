import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

	/* Reset */
	* { box-sizing: border-box; }

	html,
	body {
		height: 100%;
		margin: 0;
		overflow: auto;
		padding: 0;

		// Remove some map items
		.gm-style-mtc {
			display: none;
			visibility: hidden;
		}
	}

	body {
		background-color: #f1f1f1;
		overflow-y: scroll;
	}

	/* Fonts */
	body { font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; }

	/* Helpers */
	.hide {
		display: none;
		visibility: hidden;
	}

	/* Sizes */
	.w100 { width: 100%;}
	.h100 { height: 100%;}
`;

export default GlobalStyles;