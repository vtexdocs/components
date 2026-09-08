import { useEffect, useRef, useState } from 'react'
import { Box, Flex, TooltipProps, SxStyleProp } from '@vtex/brand-ui'

import styles from './styles'
import CaretIcon from 'components/icons/caret'
interface Props extends Pick<TooltipProps, 'children' | 'label' | 'placement'> {
  sx?: SxStyleProp
  isCard?: boolean
  /** When true, the tooltip stays visible even without hover. */
  open?: boolean
  wrapperSx?: SxStyleProp
}

const Tooltip = ({
  children,
  label,
  placement,
  sx,
  isCard,
  open,
  wrapperSx,
}: Props) => {
  const box = useRef<HTMLDivElement>()
  const [boxWidth, setBoxWidth] = useState(0)
  const [boxHeight, setBoxHeight] = useState(0)
  const [boxOffsetLeft, setBoxOffsetLeft] = useState(0)
  const [boxOffsetTop, setBoxOffsetTop] = useState(0)
  const [hovered, setHovered] = useState(false)
  const visible = Boolean(open) || hovered

  useEffect(() => {
    if (box.current) {
      setBoxWidth(box.current.clientWidth)
      setBoxHeight(box.current.clientHeight)
      setBoxOffsetLeft(box.current.offsetLeft)
      setBoxOffsetTop(box.current.offsetTop)
    }
  }, [
    open,
    box.current,
    box.current?.clientWidth,
    box.current?.clientHeight,
    box.current?.offsetLeft,
    box.current?.offsetTop,
  ])

  return (
    <Box sx={wrapperSx}>
      <Box
        ref={box}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </Box>
      {visible && (isCard ?? true) && (
        <Flex
          sx={styles.tooltipContainer(
            sx,
            placement || 'top',
            boxWidth,
            boxHeight,
            boxOffsetLeft,
            boxOffsetTop
          )}
        >
          <CaretIcon sx={styles.caret(placement || 'top')} />
          <Box sx={styles.labelStyle(isCard ?? false)}>{label}</Box>
        </Flex>
      )}
    </Box>
  )
}

export default Tooltip
