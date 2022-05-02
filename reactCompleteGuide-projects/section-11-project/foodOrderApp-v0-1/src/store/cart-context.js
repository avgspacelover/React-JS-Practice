import { createContext } from 'react';

const CartContext= createContext( {
    items: [],
    totalAmount: 0,
    additem: (item) => {},
    removeitem: (id) => {}
});


export default CartContext;