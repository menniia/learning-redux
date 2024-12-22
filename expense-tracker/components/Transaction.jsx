/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../features/transactions/transactionsSlice";

const Transaction = ({ transaction }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTransaction(transaction));
    }

    return (
        <li>
            <span>
                {transaction.amount} - {transaction.category}{" "}
                <span>
                    ({transaction.description})
                </span>
            </span>
            <button onClick={handleDelete}>
                X
            </button>
        </li>
    )
}

export default Transaction;