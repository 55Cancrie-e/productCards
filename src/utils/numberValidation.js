export  const numberValidation = (number) => {
    if(number.replace(/\D/g,'') !== number) {
        return 'Only numbers allowed';
    } 
    else if(number.length < 12 && number.length >= 1){
        return 'Should contain 12 characters';
    }
    else {
        return '';
    }
}