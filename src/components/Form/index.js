import React, { useState } from 'react';
import getDataFromApi from '../../services/api';
import * as S from './styled';

const Form = ({ addressInfo, formError, setAddressInfo, setformError, setCloseCard }) => {
	const [formInput, setFormInput] = useState('');

	// Handle input data
	const handleInputValue = (event) => {
		let inputValue = '';
		inputValue = event.target.value;
		inputValue = inputValue.replace(/\D/gmi, '');
		inputValue = inputValue.replace(/(\d{5})(\d{1,3})/gmi, '$1-$2');

		setFormInput(inputValue);
		setformError('');
	};

	// Get information from ViaCEP
	const getAddress = cep => getDataFromApi(`https://viacep.com.br/ws/${cep}/json/`);

	const handleFormSubmit = async event => {
		event.preventDefault();
		const cep = formInput;

		if (!cep) {
			setformError(`Por favor, informe um CEP`);
			return;
		}

		// If the current zip code is the same as the previously searched zip code,
		// it does not call the API, it just displays the map with the previous data
		if (cep && addressInfo && cep === addressInfo.cep) {
			setCloseCard(false);
			return;
		}

		await setAddressInfo(await getAddress(cep));
	};

	return(
		<>
			<S.formCep onSubmit={handleFormSubmit}>
				<S.formCepInput
					placeholder="Digite seu CEP:"
					maxLength="9"
					value={formInput}
					onChange={e => handleInputValue(e)}
					autoComplete="true"
				/>

				<S.formCepButton children="Consultar"/>
			</S.formCep>

			<S.formCepError children={formError} />
		</>
	);
};

export default Form;