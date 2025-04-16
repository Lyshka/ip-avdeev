import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules';

import { review } from "constants"
import { Title } from "ui"
import { ReviewItem, ReviewPagination } from "components/Review"

export const Review = () => {
  return (
    <section>
      <Title title="Отзывы наших клиентов" />

      <Swiper modules={[Navigation]} spaceBetween={24} slidesPerView={2} loop={true}>
        {review.map((props) => (
          <SwiperSlide>
            <ReviewItem key={props.id} {...props} />
          </SwiperSlide>
        ))}

        <ReviewPagination />
      </Swiper>
    </section>
  )
}