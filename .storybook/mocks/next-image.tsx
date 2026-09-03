import type { ImgHTMLAttributes } from 'react'

type NextImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string | { src: string }
  alt: string
  fill?: boolean
  priority?: boolean
  quality?: number
  sizes?: string
  unoptimized?: boolean
}

const Image = ({
  src,
  alt,
  fill,
  width,
  height,
  priority: _priority,
  quality: _quality,
  sizes: _sizes,
  unoptimized: _unoptimized,
  style,
  ...rest
}: NextImageProps) => {
  const imgSrc = typeof src === 'string' ? src : src.src
  const isFluid = fill || width === 0 || height === 0

  return (
    <img
      src={imgSrc}
      alt={alt}
      width={isFluid ? undefined : width}
      height={isFluid ? undefined : height}
      style={isFluid ? { width: '100%', height: 'auto', ...style } : style}
      {...rest}
    />
  )
}

export default Image
