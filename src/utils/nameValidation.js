export const nameValidation = (name) => {
    if(name.replace(/^[a-zA-Z]+$/, '') !== ''){
        return 'Only letters allowed';
    } else {
       return ''
    }
}