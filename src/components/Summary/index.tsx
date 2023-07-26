import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar, ArrowLeft, ArrowRight } from 'phosphor-react';
import { useContextSelector } from 'use-context-selector'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useSummary } from '../../hooks/useSummary';
import { priceFormatter } from '../../utils/formatter';
import { formatCurrentMonth } from '../../utils/date';
import { TransactionsContext } from '../../contexts/TransactionsContext';

import { SummaryCard, SummaryContainer, SummaryContent, Filter } from './styles';

export function Summary() {
    const summary = useSummary();

    const { currentMonth, setCurrentMonth } = useContextSelector(TransactionsContext, (context) => {
        return context;
    });

    function handleChangeMonth(action: 'next' | 'prev'){
        const [year, month] = currentMonth.currentMonth.split('-');
        const currentDate = new Date(parseInt(year), parseInt(month) - 1);

        if(action === 'next'){
            currentDate.setMonth(currentDate.getMonth() + 1);
        } else {
            currentDate.setMonth(currentDate.getMonth() - 1);
        }

        const newDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`;
        const date = formatCurrentMonth(newDate);

        setCurrentMonth({
            currentMonth: newDate,
            currentMonthFormatted: date
        });
    }

    return(
        <SummaryContainer>
            <Filter>
                <ArrowLeft size={32} color="#fff" onClick={() => handleChangeMonth('prev')} />
                <span>{currentMonth.currentMonthFormatted}</span>
                <ArrowRight size={32} color="#fff" onClick={() => handleChangeMonth('next')} />
            </Filter>

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