import { useSwiper } from "swiper/react"

import { LeftArrowIcon, RightArrowIcon } from "icons"

export const ReviewPagination: React.FC = () => {
    const reviewSlider = useSwiper()

    const handleLeft = () => {
        reviewSlider.slidePrev();
    }

    const handleRight = () => {
        reviewSlider.slideNext();
    }

    return (
        <nav className="mt-11 mx-auto w-fit space-x-6">
            <button onClick={handleLeft}>
                <LeftArrowIcon />
            </button>

            <button onClick={handleRight}>
                <RightArrowIcon />
            </button>
        </nav>
    )
}