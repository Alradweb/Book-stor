import React, {createContext, useReducer, useEffect} from 'react'
import {CartReducer} from './CartReducer'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const initialState = {cartItems : [], checkout: false}
    const [state, dispatch] = useReducer(CartReducer, initialState)
    useEffect(() => {
        const items = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        addBooks(items)
    }, [])

    const increase = payload => {
        dispatch({type: 'INCREASE', payload})
    }

    const decrease = payload => {
        dispatch({type: 'DECREASE', payload})
    }

    const addBook = payload => {
        dispatch({type: 'ADD_BOOK', payload})
    }
    const addBooks = payload => {
        dispatch({type: 'ADD_BOOKS', payload})
    }

    const removeBook = payload => {
        dispatch({type: 'REMOVE_BOOK', payload})
    }

    const clearCart = () => {
        dispatch({type: 'CLEAR'})
    }

    const handleCheckout = () => {
        console.log('CHECKOUT', state);
        dispatch({type: 'CHECKOUT'})
    }

    const contextValues = {
        removeBook,
        addBook,
        increase,
        decrease,
        clearCart,
        handleCheckout,
        ...state
    }

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider