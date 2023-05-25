import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin: 40px 0;

    span{
        color: ${props => props.theme['gray-300']};
    }
`;

export const Button = styled.button<{ isCurrent?: boolean; }>`
    width: 40px;
    height: 40px;
    border-radius: 6px;
    border: 0;
    cursor: pointer;

    &.active{
        background: ${props => props.theme['green-500']};
        color: ${props => props.theme['gray-100']};
    }

    background: ${props => props.theme['gray-600']};
    color: ${props => props.theme['gray-300']};
`;