import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoImg from './../../assets/dtmoney-logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModel'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContext } from 'react'
import { Activity } from 'phosphor-react'

export function Header() {
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
