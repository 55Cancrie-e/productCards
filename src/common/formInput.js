import React from 'react'

const FormInput = ({ active, type, errorMassage, placeholder, value, onBlur, onChange }) => {
  return (
    <div className='input-seccion'>
        <input 
        type={type} 
        className={active ? 'modal_input error' : 'modal_input'} 
        placeholder={placeholder} 
        value={value} 
        onBlur={onBlur} 
        onChange={onChange}
        />
        {active && <span className='errorCircle'><i className="fa-solid fa-xmark"></i></span>}
        {active && <span className='errorMassage'>{errorMassage}</span>}
    </div>
  )
}

export default FormInput