import { Prescription } from 'phosphor-react'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Transaction {
  id: number
  description: string
  type: 'income ' | 'outcome'
  price: number
  category: string
  createdAt: string
}
interface CreateTransactionInput {
  price: number
  description: string
  category: string
  type: 'income' | 'outcome'
}
interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsContextProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvder({ children }: TransactionsContextProps) {
  const [transactions, setTrasactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions/', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTrasactions(response.data)
  }

  async function createTransaction(data: CreateTransactionInput) {
    const response = await api.post('transactions', {
      ...data,
      createdAt: new Date(),
    })
    setTrasactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
