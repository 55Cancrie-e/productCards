import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductCards } from '../../store/productCards/cards.actions'
import { minPrice } from '../../utils/minPrice'
import Modal from '../Modal/Modal'
import ProductCard from '../ProductCard/ProductCard'
import './cardPage.css'

const CardPage = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const [ selectedItem, setSelectedItem ] = useState({});
    const cards = useSelector(state => state.productCardsStore?.productCards)

    useEffect(() => {
      dispatch(getProductCards())
    }, [])

  return (
    <>
        <div className='cardPage-section'>
            {cards.map((item, index) => {
              return(
              <ProductCard {...item} key={index} onClick={() => {setShowModal(true);setSelectedItem({...item})}}/>
              )
            })}
            <div className="botton-block">
                <button onClick={() => {setShowModal(true);setSelectedItem({...minPrice(cards)})}}>Buy cheapest</button>
            </div>
        </div>
        <Modal
        active={showModal}
        setActive={setShowModal}
        {...selectedItem}
        />
    </>
  )
}

export default CardPage