import React, { useCallback, useEffect, useState } from 'react';
import './modal.css';
import FormInput from '../../common/formInput';
import { nameValidation } from '../../utils/nameValidation';
import { numberValidation } from '../../utils/numberValidation';

const Modal = ({active, setActive, category, name, price}) => {
    const [ nameInput, setNameInput ] = useState('');
    const [ nameInputValid, setNameInputValid ] = useState('')
    const [ numberInput, setNumberInput ] = useState('')
    const [ numberInputValid, setNumberInputValid ] = useState('')
    const keyPress = useCallback(
		(e) => {
			if (e.key === 'Escape' && active) {
				setActive(false);
			}
		},
		[setActive, active]
	);

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
		return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress])

    const HandleSubmit = (e) => {
        e.preventDefault();      
        if(nameInput === ''){
           return setNameInputValid('This field in required')
        }  
        if(numberInput.length === 0) {
            return setNumberInputValid('This field in required')
        } 
        if(nameValidation(nameInput) === '' && 
        numberValidation(numberInput) === ''){
            console.table({
                category, 
                name, 
                price, 
                nameInput, 
                numberInput
            })
            setActive(false);
            setNameInput('');
            setNumberInput('');
        }
    }
  return (
    <div 
    className={active ? 'modal active' : 'modal'}
    onClick={() => setActive(false)}
    >
        <div className={active ? 'closeBlock active' : 'closeBlock'}>
        <div 
        className={active ? 'modal_content active' : 'modal_content'}
		onClick={(e) => e.stopPropagation()}
        >
            <div className='infoBlock'>
                <h3 className='card-category'>{category}</h3>
                <h2 className='card-name'>{name}</h2>
                <h2 className='cardPrice'><span className='dollarSighn'>$</span>{price}</h2>
            </div>
          
                <form className='modal_form' onSubmit={HandleSubmit}>
                    <FormInput 
                    type={'text'} 
                    placeholder={'Name'}
                    value={nameInput}
                    errorMassage={nameInputValid} 
                    onChange={(e) => {setNameInput(e.target.value); setNameInputValid('')}} 
                    onBlur={() => {setNameInputValid(nameValidation(nameInput))}} 
                    active={nameInputValid}
                    />
                    <FormInput 
                    type={'tel'} 
                    value={numberInput}
                    placeholder={'Number'} 
                    errorMassage={numberInputValid} 
                    onChange={(e) => {setNumberInput(e.target.value); setNumberInputValid('')}} 
                    onBlur={() => {setNumberInputValid(numberValidation(numberInput))}}
                    active={numberInputValid}
                    />
                    <button className='modal_sumit_button'><span>ORDER</span></button>
                </form>

               
        </div>
        <span 
                className='modal_close'
                onClick={() => setActive((prev) => !prev)}
                >
                <i className="fa-solid fa-xmark"></i>
        </span>
        </div>
    </div>
  )
}

export default Modal