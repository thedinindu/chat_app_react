import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    isLoading: false,
    error: null,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // fetchProducts(state, actions) {
        //     state.data = actions.payload
        // }
    },
    extraReducers: builder => {
        builder
            .addCase(getProductsList.pending, state => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getProductsList.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(getProductsList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }
})

export const { fetchProducts } = productSlice.actions
export default productSlice.reducer

export const getProductsList = createAsyncThunk('product/get', async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json()
    return result
})

// export function getProductsList () {
//     return async function getProductsThunk(dispatch, getState) {
//         const data = await fetch('https://fakestoreapi.com/products')
//         const result = await data.json()
//         dispatch(fetchProducts(result))
//     }
// }
