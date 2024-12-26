import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { CATEGORIES } from "../features/budgets/budgetsSlice";
import { addTransaction } from "../features/transactions/transactionsSlice";

const TransactionForm = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [description, setDescription] = useState(" ");
    const [amount, setAmount] = useState(0);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(
            addTransaction({
                category: category,
                description: description,
                amount: parseFloat(amount),
                id: uuidv4
            })
        )
        setCategory(CATEGORIES[0]);
        setDescription(" ");
        setAmount(0)
    }

    return (
        <section>
            <h2>New Transaction</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="category">Category</label>
                        <select
                            name="category"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.currentTarget.value)}
                        >
                            {CATEGORIES.map((c) => (
                                <option
                                    value={c}
                                    key={c}>
                                    {c}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.currentTarget.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="amount">Amount</label>
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            value={amount}
                            step="0.5"
                            onChange={(e) => setAmount(e.currentTarget.value)}
                        />
                    </div>

                </div>
            </form>
        </section>
    )
}

export default TransactionForm;