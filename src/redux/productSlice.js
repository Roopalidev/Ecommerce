import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getProductList } from '../services/post.api'
import { getProductList1 } from '../services/post.api';
import { getProductList2 } from '../services/post.api';
import { getProductList3 } from '../services/post.api';
import { getProductList4 } from '../services/post.api';
import { getProductList5 } from '../services/post.api';
import { getProductList6 } from '../services/post.api';
// import {getLoginList } from '../services/post.api';
// import { getProductListdel } from '../services/post.api';

export const fetchProductList = createAsyncThunk(
  'product/fetchProductList',
  async () => {
    return await getProductList();
  }
)

export const fetchProductList1 = createAsyncThunk(
  'product/fetchProductList1',
  async () => {
    return await getProductList1();
  }
)

export const fetchProductList2 = createAsyncThunk(
  'product/fetchProductList2',
  async () => {
    return await getProductList2();
  }
)

export const fetchProductList3 = createAsyncThunk(
  'product/fetchProductList3',
  async () => {
    return await getProductList3();
  }
)

export const fetchProductList4 = createAsyncThunk(
  'product/fetchProductList4',
  async () => {
    return await getProductList4();
  }
)

export const fetchProductList5 = createAsyncThunk(
  'product/fetchProductList5',
  async () => {
    return await getProductList5();
  }
)

export const fetchProductList6 = createAsyncThunk(
  'product/fetchProductList6',
  async () => {
    return await getProductList6();
  }
)

// export const fetchLoginList = createAsyncThunk(
//   'product/fetchLoginList6',
//   async () => {
//     return await getLoginList();

//   }
// )

// export const fetchProductListdel = createAsyncThunk(
//   'product/fetchProductListdel',
//   async () => {
//     return await getProductListdel();

//   }
// )

export const productSlice = createSlice({

  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductList.fulfilled, (state, actions) => {
      state.products = actions.payload;
    });

    builder.addCase(fetchProductList1.fulfilled, (state, actions) => {
      state.products = actions.payload;
    });

    builder.addCase(fetchProductList2.fulfilled, (state, actions) => {
      state.products = actions.payload;
    });

    builder.addCase(fetchProductList3.fulfilled, (state, actions) => {
      state.products = actions.payload;
    });

    builder.addCase(fetchProductList4.fulfilled, (state, actions) => {
      state.products = actions.payload;
    });

    builder.addCase(fetchProductList5.fulfilled, (state, actions) => {
      state.products = actions.payload;
    });

    builder.addCase(fetchProductList6.fulfilled, (state, actions) => {
      state.products = actions.payload;
    });
    // builder.addCase(fetchLoginList.fulfilled, (state, actions) => {
    //   state.products = actions.payload;


    // });
    // builder.addCase(fetchProductListdel.fulfilled, (state, actions) => {
    //   state.products = actions.payload;


    // });


  },
})

// Action creators are generated for each case reducer function
export const { } = productSlice.actions


// export default counterSlice.reducer
