import { useState } from 'react';
import { useContextSelector } from 'use-context-selector'; 

import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination/index';
import { SearchForm } from '../../components/SearchForm';
import { Summary } from '../../components/Summary';
import { Transaction } from '../../components/Transaction';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { dateFormatter, priceFormatter } from '../../utils/formatter';
import { transactionsPerPage, registersPerPage } from '../../utils/transactionsPerPage';

import { PriceHighLight, TransactionsContainer, TransactionContainer, TransactionsTable } from './styles';

export function Transactions() {
    const [page, setPage] = useState(1);

    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions;
    });
    const total = transactionsPerPage(page, transactions);

    return(
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />

                <TransactionContainer>
                    {total.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))}
                </TransactionContainer>

                <TransactionsTable>
                    <tbody>
                        {total.map(transaction => (
                            <tr key={transaction.id}>
                                <td width="50%">{transaction.description}</td>
                                <td>
                                    <PriceHighLight variant={transaction.type}>
                                        {transaction.type === 'outcome' && '- '}
                                        {priceFormatter.format(transaction.price)}
                                    </PriceHighLight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                            </tr>
                        ))}
                    </tbody>
                </TransactionsTable>

                <Pagination
                    totalCountOfRegisters={transactions.length}
                    registersPerPage={registersPerPage}
                    currentPage={page}
                    onPageChange={setPage}
                />
            </TransactionsContainer>
        </div>
    );
}