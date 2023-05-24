import styled, { css } from 'styled-components';

export const SummaryContainer = styled.section`
    background: ${props => props.theme['gray-900']};
    padding: 2.5rem 0 7.5rem;
`;

export const SummaryContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    margin-top: -5rem;
    padding: 0 1.5rem;

    display: flex;
    gap: 2rem;

    .swiper{
        width: 100%;
    }

    @media(min-width: 320px){
        .swiper-slide {
            width: 280px;
        }
    }

    @media(min-width: 1024px){
        .swiper-slide {
            width: 336px;
        }
    }
`;

export const SummaryCard = styled.div<{ variant?: 'green' }>`
    background-color: ${props => props.theme['gray-600']};
    border-radius: 6px;
    padding: 2rem;

    header{
        display: flex;
        align-items: center;
        justify-content:  space-between;
        color: ${props => props.theme['gray-300']};
    }

    strong{
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }

    ${props => props.variant === 'green' && css`
        background-color: ${props.theme['green-700']};
    `}
`;