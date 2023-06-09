import { Button } from './styles';

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({ isCurrent = false, onPageChange, number }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button className={`${isCurrent && 'active'}`}>{number}</Button>
        );
    }

    return (
        <Button onClick={() => onPageChange(number)}>
            {number}
        </Button>
    );
}