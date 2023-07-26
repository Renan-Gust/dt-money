import { ReactNode, useEffect, useState, useCallback } from 'react';
import { createContext } from 'use-context-selector';

import { api } from '../lib/axios';
import { getCurrentMonth } from '../utils/date';

export interface Transactions {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface CreateTransactionInput {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome';
}

interface CurrentMonthType {
    currentMonth: string;
    currentMonthFormatted: string;
}

interface TransactionsContextType {
    transactions: Transactions[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: CreateTransactionInput) => Promise<void>;
    currentMonth: CurrentMonthType;
    setCurrentMonth: (CurrentMonth: CurrentMonthType) => void;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsProviderProps {
    children: ReactNode;
}

export function TransactionProvider({ children }: TransactionsProviderProps) {
    const [allTransactions, setAllTransactions] = useState<Transactions[]>([]);
    const [transactions, setTransactions] = useState<Transactions[]>([]);
    const [currentMonth, setCurrentMonth] = useState<CurrentMonthType>(getCurrentMonth());

    const fetchTransactions = useCallback(async (query?: string) => {
        const response = await api.get('/transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query
            }
        });

        setAllTransactions(response.data);
    }, []);

    const transactionsFilteredByDate = useCallback((date: string) => {
        const [year, month] = date.split('-');

        const transactionsFiltered = allTransactions.filter((transaction) => {
            const transactionDate = new Date(transaction.createdAt);
    
            if(transactionDate.getFullYear() === parseInt(year) && transactionDate.getMonth() + 1 === parseInt(month)){
                return transaction;
            }
        });

        setTransactions(transactionsFiltered);
    }, [allTransactions]);

    const createTransaction = useCallback(async (data: CreateTransactionInput) => {
        const { description, price, category, type } = data;

        const response = await api.post('/transactions', {
            description,
            price,
            category,
            type,
            createdAt: new Date()
        });

        setAllTransactions(state => [response.data, ...state]);
    }, []);

    useEffect(() => {
        fetchTransactions();
    }, [fetchTransactions]);

    useEffect(() => {
        transactionsFilteredByDate(currentMonth.currentMonth);
    }, [allTransactions, currentMonth]);

    return(
        <TransactionsContext.Provider value={{ transactions, fetchTransactions, createTransaction, currentMonth, setCurrentMonth }}>
            {children}
        </TransactionsContext.Provider>
    );
}