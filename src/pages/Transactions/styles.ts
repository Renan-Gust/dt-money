import styled from 'styled-components';

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
`;

export const TransactionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 1.5rem 0;

    @media(min-width: 768px){
        display: none;
    }
`;

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    @media(max-width: 767px){
        display: none;
    }
    
    td{
        padding: 1.25rem 2rem;
        background: ${props => props.theme['gray-700']};

        &:first-child{
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:nth-last-child(-n+2){
            color: ${props => props.theme['gray-300']};
        }

        &:last-child{
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`;

export const PriceHighLight = styled.span<{ variant: 'income' | 'outcome' }>`
    color: ${props => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']};
`;