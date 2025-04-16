import { IIcon } from "interfaces"

export const LeftArrowIcon: React.FC<IIcon> = ({ className, height = 48, width = 48 }) => {
    return (
        <svg width={width} height={height} className={className} viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_32_959)">
                <path d="M0 23C0 35.696 10.304 46 23 46C35.696 46 46 35.696 46 23C46 10.304 35.696 0 23 0C10.304 0 0 10.304 0 23ZM23 20.7H32.2V25.3H23V32.2L13.8 23L23 13.8V20.7Z" fill="#0FC042" />
            </g>
            <defs>
                <clipPath id="clip0_32_959">
                    <rect width="46" height="46" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}