export function getCurrentMonth() {
    const now = new Date();
    
    const month = `${now.getFullYear()}-${now.getMonth() + 1}`;
    const date = formatCurrentMonth(month);

    return {
        currentMonth: month,
        currentMonthFormatted: date
    };
}

export function formatCurrentMonth(currentMonth: string): string {
    const [year, month] = currentMonth.split('-');
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return `${months[parseInt(month) - 1]} de ${year}`;
}