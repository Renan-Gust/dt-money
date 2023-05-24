import { Transactions } from '../../contexts/TransactionsContext';
import { dateFormatter, priceFormatter } from '../../utils/formatter';

import { TransactionContent, PriceHighLight } from './styles';

interface TransactionProps {
    transaction: Transactions;
}

export function Transaction({ transaction }: TransactionProps) {
    return(
        <TransactionContent>
            <p>{transaction.description}</p>

            <PriceHighLight variant={transaction.type}>
                {transaction.type === 'outcome' && '- '}
                {priceFormatter.format(transaction.price)}
            </PriceHighLight>

            <div>
                <span>{transaction.category}</span>
                <span>{dateFormatter.format(new Date(transaction.createdAt))}</span>
            </div>
        </TransactionContent>
    );
}