import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoImg from './../../assets/dtmoney-logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModel'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContext } from 'react'

export function Header() {
  // eslint-disable-next-line no-unused-vars
  const { transactions } = useContext(TransactionsContext)
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <NewTransactionModal />
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transacao</NewTransactionButton>
          </Dialog.Trigger>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
