interface ImageProps {
	src: string
	alt: string
	className?: string
}

export const Image = ({ src, alt, className }: ImageProps) => {
	return (
		<picture>
			<img className={className} src={src} alt={alt} loading='lazy' />
		</picture>
	)
}
