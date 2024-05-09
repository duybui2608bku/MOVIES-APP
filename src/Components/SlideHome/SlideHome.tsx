import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-creative'
import './SlideHome.scss'
import { EffectCreative } from 'swiper/modules'
import { useQuery } from '@tanstack/react-query'
import getMoviePopular from 'src/Service/Home.api'
import ButtonWatchTrailer from '../Buttons/ButtonWatchTrailer'
import ButtonWatchNow from '../Buttons/ButtonWatchNow'

const SlideHome = () => {
  const baseUrlImage = 'https://image.tmdb.org/t/p/original'
  const countPage = 1
  const { data: MovieHome } = useQuery({
    queryKey: ['moviePopular'],
    queryFn: () => {
      return getMoviePopular(countPage)
    }
  })

  console.log(MovieHome)
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400]
          },
          next: {
            translate: ['100%', 0, 0]
          }
        }}
        modules={[EffectCreative]}
        className='mySwiper'
      >
        <div className='home-container'>
          {MovieHome?.data.results.map((item, index) => {
            return (
              <>
                <SwiperSlide className=''>
                  <div className='img-background'>
                    <img src={`${baseUrlImage}${item.backdrop_path}`} alt='img-back-ground' />
                  </div>
                  <div className='img-poster'>
                    <img src={`${baseUrlImage}${item.poster_path}`} alt='img-poster' />
                  </div>
                  <div className='des'>
                    <div className='title'>{item.title}</div>
                    <div className='over-view'>{item.overview}</div>
                    <div className='button-customs'>
                      <ButtonWatchNow />
                      <ButtonWatchTrailer />
                    </div>
                  </div>
                </SwiperSlide>
              </>
            )
          })}
        </div>
      </Swiper>
    </>
  )
}

export default SlideHome
