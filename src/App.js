import React, { useState, useEffect } from 'react';

import Card from './components/Card';
import GlobalStyles from './components/styles/global';
import Form from './components/Form';
import Map from './components/Map';
import Address from './components/Address';

function App() {
	const [closeMap, setCloseMap] = useState(true);
	const [addressInfo, setAddressInfo] = useState(null);
	const [formError, setformError] = useState(null);

	useEffect(() => {
		setCloseMap(false);
	}, [addressInfo]);

	return (
		<div className="App">
			<GlobalStyles />

			<Card title="Consultar seu CEP">
				<Form
					formError={formError}
					setformError={setformError}
					setAddressInfo={setAddressInfo}
				/>
			</Card>

				<Card>
					{addressInfo && (<Address {...addressInfo} />)}
					{!closeMap && addressInfo && (
						<Map
							setCloseMap={setCloseMap}
							addressInfo={addressInfo}
						/>
					)}
				</Card>
		</div>
	);
}

export default App;
