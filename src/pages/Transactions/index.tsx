import { Header } from '../../components/Heaader'
import { Summary } from '../../components/Summary'
import {
  PriceHighight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <PriceHighight variant="income">R$30.00</PriceHighight>
              </td>
              <td>Servico</td>
              <td>23/04/2022</td>
            </tr>
            <tr>
              <td width="40%">Faxina</td>
              <td>
                <PriceHighight variant="outcome">R$30.00</PriceHighight>
              </td>
              <td>Servico</td>
              <td>23/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
