import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, EffectCreative, Autoplay } from 'swiper'

import { styled } from '../../../stitches.config'
import { Image } from '../common/Image'

import 'swiper/css'
import 'swiper/css/effect-creative'

import banner01 from '../../assets/images/mainBanner/banner01.jpg'
import banner02 from '../../assets/images/mainBanner/banner02.jpg'
import banner03 from '../../assets/images/mainBanner/banner03.jpg'

const Section = styled('section', {
	display: 'flex'
})

const Div = styled('div', {
	backgroundColor: '#000000',
	height: '100vh',
	width: '50%',
	'& > div': {
		height: '100%',
		'&.custom': {
			maxWidth: '700px',
			marginLeft: 'auto',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center'
		},
		h1: {
			color: 'white',
			fontWeight: 800,
			fontSize: '3.5rem',
			fontFamily: 'Raleway, sans-serif',
			textTransform: 'uppercase'
		}
	}
})

export const MainSection = () => {
	return (
		<Section>
			<Div>
				<div className='custom'>
					<h1>
						realismo & <br />
						oriental expert
					</h1>
				</div>
			</Div>
			<Div>
				<Swiper
					grabCursor={false}
					slidesPerView={1}
					modules={[A11y, EffectCreative, Autoplay]}
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
					autoplay={{
						delay: 4000,
						disableOnInteraction: false
					}}
				>
					<SwiperSlide className='h-screen'>
						<Image
							src={banner01}
							alt='Fotografia de um braço fechado com uma tatuagem oriental de flores.'
							className='w-full'
						/>
					</SwiperSlide>
					<SwiperSlide className='h-screen'>
						<Image
							src={banner02}
							alt='Fotografia de umas costas fechada com uma tatuagem oriental de tigre.'
							className='w-full'
						/>
					</SwiperSlide>
					<SwiperSlide className='h-screen'>
						<Image
							src={banner03}
							alt='Fotografia de um peito fechado com uma tatuagem oriental de Hannya.'
							className='w-full'
						/>
					</SwiperSlide>
				</Swiper>
			</Div>
		</Section>
	)
}
