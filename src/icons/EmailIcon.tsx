import { IIcon } from "interfaces"

export const EmailIcon: React.FC<IIcon> = ({ className, height = 28, width = 28 }) => {
    return (
        <svg width={width} height={height} className={className} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.66536 23.3337C4.0237 23.3337 3.47459 23.1054 3.01803 22.6488C2.5607 22.1915 2.33203 21.642 2.33203 21.0003V7.00033C2.33203 6.35866 2.5607 5.80955 3.01803 5.35299C3.47459 4.89566 4.0237 4.66699 4.66536 4.66699H23.332C23.9737 4.66699 24.5232 4.89566 24.9805 5.35299C25.4371 5.80955 25.6654 6.35866 25.6654 7.00033V21.0003C25.6654 21.642 25.4371 22.1915 24.9805 22.6488C24.5232 23.1054 23.9737 23.3337 23.332 23.3337H4.66536ZM13.9987 15.167L4.66536 9.33366V21.0003H23.332V9.33366L13.9987 15.167ZM13.9987 12.8337L23.332 7.00033H4.66536L13.9987 12.8337ZM4.66536 9.33366V7.00033V21.0003V9.33366Z" fill="#0FC042" />
        </svg>
    )
}