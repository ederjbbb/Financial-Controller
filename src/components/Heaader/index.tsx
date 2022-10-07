import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from './../../assets/dtmoney-logo.svg';

export function Header () {
    return <HeaderContainer>
                <HeaderContent>
                    <img src={logoImg} alt="" />

                    <NewTransactionButton>Nova Transacao</NewTransactionButton>
                </HeaderContent>  
            </HeaderContainer>
}