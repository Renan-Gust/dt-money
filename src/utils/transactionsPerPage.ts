import { Transactions } from '../contexts/TransactionsContext';

export const registersPerPage = 10;

export function transactionsPerPage(page: number, transactions: Transactions[]){
    const offset = (page - 1) * registersPerPage;

    return transactions.slice(offset, offset + registersPerPage);
}