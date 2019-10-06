import React, { useState, useEffect } from 'react';

import Card from './components/Card';
import GlobalStyles from './components/styles/global';
import Form from './components/Form';
import Map from './components/Map';
import Address from './components/Address';

function App() {
	const [closeCard, setCloseCard] = useState(true);
	const [addressInfo, setAddressInfo] = useState(null);
	const [formError, setformError] = useState(null);

	useEffect(() => {
		setCloseCard(false);
	}, [addressInfo]);

	return (
		<div className="App">
			<GlobalStyles />

			<Card title="Consultar seu CEP">
				<Form
					addressInfo={addressInfo}
					formError={formError}
					setAddressInfo={setAddressInfo}
					setformError={setformError}
					setCloseCard={setCloseCard}
				/>
			</Card>

				<Card closeCard={closeCard}>
					{addressInfo && (
						<>
							<Address {...addressInfo} />
							<Map
								setCloseCard={setCloseCard}
								addressInfo={addressInfo}
							/>
						</>
					)}
				</Card>
		</div>
	);
}

export default App;
