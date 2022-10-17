import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cardTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.name === action.payload.name);

            if (itemIndex >= 0) {
                //if already item is there in cart
                state.cartItems[itemIndex].cartQuantity += 1

            } else {
                /* item is not in cart add as new item*/
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
            }
            // localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },


        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },


        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )
            /* if 1 is there then we increment then product is add to cart*/
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1

                /* if 1 is there then we decrement then product is removed from cart*/
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
                state.cartItems = nextCartItems;
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

        },


        clearCart(state, action) {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

        },

        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
                return cartTotal;
            },
                {
                    total: 0,
                    quantity: 0
                });
            /* update state*/
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
    },
});


export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions;
export default cartSlice.reducer;