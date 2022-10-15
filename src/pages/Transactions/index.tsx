import { Header } from '../../components/Heaader'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

import { dateFormatter, priceFormatter } from '../../utils/formatted'
import { useContextSelector } from 'use-context-selector'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="40%">{transaction.description}</td>
                  <td>
                    <PriceHighight variant={transaction.type}>
                      {priceFormatter.format(transaction.price)}
                    </PriceHighight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
