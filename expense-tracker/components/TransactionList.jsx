/* eslint-disable react/prop-types */
import Transaction from "./Transaction";

const TransactionList = ({ transactions }) => {
    return (
        <section>
            <h2>Transactions</h2>
            <ul>
                {transactions.map((t) => (
                    <Transaction transaction={t} key={t.id} />
                ))}
            </ul>
        </section>
    )
}

export default TransactionList;