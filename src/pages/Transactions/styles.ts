import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};
    
    &:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        
    }
    &:last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
      
`
interface PriceHighightProps {
  variant: 'income' | 'outcome'
}
export const PriceHighight = styled.span<PriceHighightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
