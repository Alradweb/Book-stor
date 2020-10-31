const saveToStorage = (cartItems) => {
    if(typeof window !== 'undefined') localStorage.setItem('cart', JSON.stringify(cartItems))
}

export const sumItems = cartItems => {
    saveToStorage(cartItems)
    const itemCount = cartItems.reduce((total, product) => total + product.quantity, 0)
    const total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return { itemCount, total }
}

export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            if (!state.cartItems.find(item => item.id === action.payload.id)) {
                const newItems = [...state.cartItems, {...action.payload, quantity: 1}]
                return {
                    ...state,
                    ...sumItems(newItems),
                    cartItems: newItems
                }
            }
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "ADD_BOOKS":
            return {
                ...state, cartItems: action.payload, ...sumItems(action.payload)
            }
        case "REMOVE_BOOK":
            const newItems = state.cartItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                ...sumItems(newItems),
                cartItems: [...newItems]
            }
        case "INCREASE":
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity++
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "DECREASE":
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity--
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "CHECKOUT":
            return {
                cartItems: [],
                checkout: true,
                ...sumItems([]),
            }
        case "CLEAR":
            return {
                cartItems: [],
                ...sumItems([]),
            }
        default:
            return state

    }
}