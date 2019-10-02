import React from 'react';

import Card from './components/Card';
import GlobalStyles from './components/styles/global';
import Form from './components/Form';
import Map from './components/Map';
import Address from './components/Address';

function App() {

	return (
		<div className="App">
			<GlobalStyles />

			<Card title="Consultar seu CEP">
				<Form />
			</Card>

			<Card>
				<Address />
				<Map />
			</Card>
		</div>
	);
}

export default App;
