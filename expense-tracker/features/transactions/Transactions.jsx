import { useSelector } from "react-redux";
import TransactionList from "../../components/TransactionList";
import { selectFlattenedTransaction } from "./transactionsSlice";
import TransactionForm from "../../components/TransactionForm";

const Transactions = () => {
    const transactions = useSelector(selectFlattenedTransaction);
    return (
        <div>
            <TransactionList transactions={transactions} />
            <TransactionForm />
        </div>
    )
}

export default Transactions;