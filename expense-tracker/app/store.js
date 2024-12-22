import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "../features/budgets/budgetsSlice.js";
import transactionsReducer from "../features/transactions/transactionsSlice.js";

const store = configureStore({
    reducer: {
        budgets: budgetReducer,
        transactions: transactionsReducer
    }
});

export default store;