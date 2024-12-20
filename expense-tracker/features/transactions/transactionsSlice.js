import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = [
    "housing",
    "food",
    "transportation",
    "utilities",
    "clothing",
    "healthcare",
    "personal",
    "education",
    "entertainment",
];

const initialState = Object.fromEntries(
    CATEGORIES.map((category) => [category, []])
)

const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        addTransaction: (state, action) => {
            state.push({
                id: action.payload.id,
                category: action.payload.category
            })
        },
        deleteTransaction: (state, action) => {
            const { category, id } = action.payload;
            state[category] = state[category].filter(
                (transaction) => transaction.id !== id
            )
        }
    }
});

export const selectTransactions = state => state.transactions;
export const selectFlattenedTransaction = state => Object.values(state.transactions).reduce((a, b) => [...a, ...b], []);

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;