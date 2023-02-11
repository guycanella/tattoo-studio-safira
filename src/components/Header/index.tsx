import { styled } from '../../../stitches.config'
import { Image } from '../common/Image'

import photoLogo from '../../assets/logo-safira-completo-transparent.png'

const Div = styled('div', {
	backgroundColor: 'transparent',
	height: '100px',
	width: '100%',
	maxHeight: '100px',
	paddingLeft: '4rem',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	position: 'absolute',
	left: 0,
	top: 0,
	zIndex: '2'
})

const Logo = styled('div', {
	backgroundColor: 'transparent',
	height: '100%'
})

const MenuButton = styled('div', {
	backgroundColor: '#FFF',
	height: '100%',
	aspectRatio: '1/1'
})

export const Header = () => {
	return (
		<Div>
			<Logo>
				<Image
					src={photoLogo}
					alt='Imagem do logo do Safira Tattoo Studio'
					className='max-h-full'
				/>
			</Logo>
			<MenuButton />
		</Div>
	)
}
