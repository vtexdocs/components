import { useContext, useEffect, useRef, useState } from 'react'
import { Box, Flex, Grid, IconCaret, Text } from '@vtex/brand-ui'

import Tooltip from 'components/tooltip'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'

import styles from './styles'
import { ContributorsProps } from './Contributors.types'

/** List of GitHub contributors for a documentation page. */
const Contributors = ({ contributors }: ContributorsProps) => {
  const { locale } = useContext(LibraryContext)

  const [showAll, setShowAll] = useState(false)
  const [pageWidth, setPageWidth] = useState(0)
  const [photosPerRow, setPhotosPerRow] = useState(0)
  const [minRows, setMinRows] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const photosContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)
    setPageWidth(window.innerWidth)

    const updatePageWidth = () => {
      setPageWidth(window.innerWidth)
    }

    window.addEventListener('resize', updatePageWidth)
    return () => window.removeEventListener('resize', updatePageWidth)
  }, [])

  useEffect(() => {
    if (isClient && photosContainer.current) {
      const gridStyle = window.getComputedStyle(photosContainer.current)
      setPhotosPerRow(gridStyle.gridTemplateColumns.split(' ').length)
    }
  }, [pageWidth, isClient])

  useEffect(() => {
    setMinRows(photosPerRow === 6 ? 1 : 2)
  }, [photosPerRow])

  const visibleRows = photosPerRow
    ? showAll
      ? Math.ceil(contributors.length / photosPerRow)
      : Math.min(Math.ceil(contributors.length / photosPerRow), minRows)
    : minRows
  const hiddenCount = contributors.length - minRows * photosPerRow

  return (
    <Flex sx={styles.container}>
      <Flex sx={styles.titleContainer}>
        <Text sx={styles.title}>{messages[locale]['contributors.title']}</Text>
        <Text sx={styles.count}>{contributors.length}</Text>
      </Flex>

      <Grid
        sx={styles.photosContainer(visibleRows)}
        ref={photosContainer}
        data-cy="contributors-container"
      >
        {contributors.map((contributor) => (
          <Box sx={styles.photo} key={contributor.login}>
            <a href={contributor.userPage}>
              <Tooltip label={contributor.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={contributor.avatar}
                  alt={messages[locale]['contributors.photo_alt'].replace(
                    '{name}',
                    contributor.name
                  )}
                  width={32}
                  height={32}
                />
              </Tooltip>
            </a>
          </Box>
        ))}
      </Grid>

      {contributors.length > minRows * photosPerRow && (
        <Flex
          sx={styles.collapseButton}
          onClick={() => {
            setShowAll(!showAll)
          }}
        >
          <Text>
            {showAll
              ? messages[locale]['contributors.toggle_less']
              : messages[locale]['contributors.toggle_more'].replace(
                  '{count}',
                  String(hiddenCount)
                )}
          </Text>
          <IconCaret direction={showAll ? 'up' : 'down'} size={24} />
        </Flex>
      )}
    </Flex>
  )
}

export default Contributors
