import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './productSlice';
import { getTotals} from './cartSlice';
import cartReducer from './cartSlice'


const store = configureStore({
  reducer: {
    cart:cartReducer,
    [productSlice.name]:productSlice.reducer,
  },
})

store.dispatch(getTotals());
export default store;