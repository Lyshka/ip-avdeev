import React from "react"
import { IIcon } from "../Interfaces/IIcon"

const TelegramIcon: React.FC<IIcon> = ({ height, width = 20 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="20" height="20" fill="#27A6E5" />
            <path d="M14 6.80111L12.4973 14.6461C12.4973 14.6461 12.287 15.1901 11.7094 14.9292L8.24229 12.1763L8.22621 12.1682C8.69454 11.7327 12.3262 8.35133 12.4849 8.19806C12.7306 7.96068 12.5781 7.81936 12.2928 7.99868L6.9284 11.5265L4.85882 10.8054C4.85882 10.8054 4.53313 10.6854 4.5018 10.4246C4.47005 10.1633 4.86954 10.0219 4.86954 10.0219L13.3066 6.59447C13.3066 6.59447 14 6.27896 14 6.80111Z" fill="white" />
        </svg>
    )
}
export default TelegramIcon