import { IIcon } from "interfaces"

export const CloseIcon: React.FC<IIcon> = ({ height = 20, width = 20, className }) => {
    return (
        <svg className={className} width={height} height={width} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_195_39)">
                <path className="group-hover:stroke-rose-500" d="M10 10L19 19M10 10L1 1M10 10L1 19M10 10L19 1" stroke="inherit" strokeWidth="2" strokeLinecap="round" />
            </g>
            <defs>
                <clipPath id="clip0_195_39">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}