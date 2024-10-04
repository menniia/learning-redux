import { createSlice, configureStore } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment(state) {
            return state + 1
        },
        decrement(state) {
            return state - 1
        }
    }
})

// export actions
export const { increment, decrement } = counterSlice.actions;

// configure store
export const store = configureStore({
    reducer: counterSlice.reducer
})