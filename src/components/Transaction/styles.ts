import styled from 'styled-components';

export const TransactionContent = styled.div`
    width: 100%;
    padding: 1.25rem 2rem;
    border-radius: 6px;
    background: ${props => props.theme['gray-700']};

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${props => props.theme['gray-500']};
    }
`;

export const PriceHighLight = styled.span<{ variant: 'income' | 'outcome' }>`
    display: block;
    margin: 1.25rem 0;
    font-weight: 700;
    color: ${props => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']};
`;