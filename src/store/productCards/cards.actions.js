import axios from "axios";
import { getProductCardsAction } from "./cards.actionTypes";

export const getProductCards = () => {
    return (dispatch) => {
        axios
        .get('https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e')
        .then(res => {
            dispatch(getProductCardsAction(res.data))
        })
        .catch(err => {
            console.dir(err)
        })
    }
}