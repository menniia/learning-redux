/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { selectTransactions } from "../features/transactions/transactionsSlice";
import { useState } from "react";
import { editBudget } from "../features/budgets/budgetsSlice";

const Budget = ({ budget }) => {
    const dispatch = useDispatch();
    const transactions = useSelector(selectTransactions);
    const [amount, setAmount] = useState(budget.amount);

    const handleEdit = event => {
        event.preventDefault();
        dispatch(editBudget({ category: budget.category, amount: amount }));
    }

    const calculateTotalExpenses = () => {
        const categoryTransactions = transactions[budget.category] || [];
        return categoryTransactions
            .map((transaction) => transaction.amount)
            .reduce((amount1, amount2) => amount1 + amount2, 0);
    }

    const remainingFunds = Number.parseFloat(budget.amount - calculateTotalExpenses()).toFixed(2);

    return (
        <div>
            <h6>Category</h6>
            <div>
                <h4>{budget.category}</h4>
                <form onSubmit={handleEdit}>
                    <input
                        type="number"
                        value={amount}
                        onChange={(event) => setAmount(event.currentTarget.value)}
                        step="0.5"
                    />
                    <button>Update</button>
                </form>
            </div>
            <div>
                <h4>Funds Remaining: {remainingFunds}</h4>
            </div>
        </div>
    )
}

export default Budget;
