import React, { useState } from 'react';
import * as S from './styled';

const Form = () => {
	const [formInput, setFormInput] = useState('');
	// Handle input data
	const handleInputValue = (event) => {
		let inputValue = '';
		inputValue = event.target.value;
		inputValue = inputValue.replace(/\D/gmi, '');
		inputValue = inputValue.replace(/(\d{5})(\d{1,3})/gmi, '$1-$2');

		setFormInput(inputValue);
	};

	return(
		<>
			<S.formCep>
				<S.formCepInput
					placeholder="Digite seu CEP:"
					maxLength="9"
					value={formInput}
					onChange={e => handleInputValue(e)}
				/>

				<S.formCepButton>
					Consultar
				</S.formCepButton>

			</S.formCep>

			<S.formCepError />
		</>
	);
};

export default Form;