import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useSummary } from '../../hooks/useSummary';
import { priceFormatter } from '../../utils/formatter';

import { SummaryCard, SummaryContainer, SummaryContent } from './styles';

export function Summary() {
    const summary = useSummary();

    return(
        <SummaryContainer>
            <SummaryContent>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    pagination={{
                        clickable: true
                    }}
                >
                    <SwiperSlide>
                        <SummaryCard>
                            <header>
                                <span>Entradas</span>
                                <ArrowCircleUp size={32} color="#00b37e" />
                            </header>
                            <strong>{priceFormatter.format(summary.income)}</strong>
                        </SummaryCard>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SummaryCard>
                            <header>
                                <span>Saídas</span>
                                <ArrowCircleDown size={32} color="#f75a68" />
                            </header>
                            <strong>{priceFormatter.format(summary.outcome)}</strong>
                        </SummaryCard>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SummaryCard variant='green'>
                            <header>
                                <span>Total</span>
                                <CurrencyDollar size={32} color="#fff" />
                            </header>
                            <strong>{priceFormatter.format(summary.total)}</strong>
                        </SummaryCard>
                    </SwiperSlide>
                </Swiper>
            </SummaryContent>
        </SummaryContainer>
    );
}