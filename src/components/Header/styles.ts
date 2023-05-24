import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background: ${props => props.theme['gray-900']};
    padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 767px){
        img{
            width: 130px;
        }
    }
`;

export const NewTransactionButton = styled.button`
    height: 50px;
    border: 0;
    border-radius: 6px;
    background: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    cursor: pointer;

    &:hover{
        background: ${props => props.theme['green-700']};
        transition: background-color 0.2s;
    }
`;