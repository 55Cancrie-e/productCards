let initialState = {
    productCards: [],
}

const productCardsStore = (state = initialState, action) => {
    switch (action.type){
        case 'GET_PRODUCT_CARDS':
            return {
                ...state,
                productCards: action.payload
            }
        default :
            return {
                ...state,
            }
    }
}


export default productCardsStore;