import { IIcon } from "interfaces"

export const ArrowDownQuest: React.FC<IIcon> = ({ className, height = 12, width = 24 }) => {
    return (
        <svg width={width} height={height} className={className} viewBox="0 0 24 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 1L12.2037 9.49363C11.8293 9.78813 11.2992 9.77773 10.9367 9.46878L1 1" stroke="#0FC042" strokeWidth="2" />
        </svg>
    )
}