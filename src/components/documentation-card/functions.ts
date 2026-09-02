import { SxStyleProp } from '@vtex/brand-ui'
import styles from './styles'

const cardContainer = (containerType: string) => {
  const containerWidth =
    containerType === 'dropdown'
      ? '100%'
      : containerType === 'mobile'
      ? '100%'
      : ['324px', '544px', '544px', '544px', '544px', '720px', '1400px']

  const textWidth =
    containerType === 'dropdown'
      ? '100%'
      : containerType === 'mobile'
      ? '100%'
      : ['276px', '496px', '496px', '496px', '496px', '672px', '1352px']

  const cardContainer: SxStyleProp = {
    ...styles.cardContainer,
    width: containerWidth,
    ...(containerType === 'mobile'
      ? {
          my: 0,
          padding: 0,
          borderRadius: 0,
          maxWidth: '100%',
          overflow: 'hidden',
          ':active, :hover': {
            borderRadius: 0,
            backgroundColor: 'transparent',
          },
          '.title': {
            minWidth: 0,
            width: '100%',
          },
          '.description': {
            width: '100%',
            maxWidth: '100%',
          },
        }
      : containerType === 'dropdown'
      ? {
          my: 0,
          padding: '12px',
          borderRadius: '8px',
          boxSizing: 'border-box',
          minWidth: 0,
          ':active, :hover': {
            borderRadius: '8px',
            backgroundColor: 'transparent',
            '.description': {
              color: '#142032',
            },
          },
          ':hover .title, :active .title': {
            color: '#142032',
          },
          '.title, .description': {
            width: '100%',
          },
        }
      : {
          '.title, .description': {
            width: textWidth,
          },
        }),
  }

  return cardContainer
}

const titleContainer = (containerType: string) => {
  const marginBottom =
    containerType === 'dropdown' || containerType === 'mobile' ? 0 : '8px'

  const titleContainer: SxStyleProp = {
    ...styles.titleContainer,
    marginBottom,
    ...(containerType === 'mobile' || containerType === 'dropdown'
      ? {
          alignItems: 'flex-start',
          gap: '12px',
        }
      : {}),
  }

  return titleContainer
}

const cardTitle = (containerType: string) => {
  const titleAttributes =
    containerType === 'see-also'
      ? {
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          fontSize: '18px',
          lineHeight: '24px',
        }
      : containerType === 'mobile'
      ? {
          ml: '0px',
          fontSize: '16px',
          lineHeight: '22px',
          color: '#4a596b',
        }
      : containerType === 'dropdown'
      ? {
          ml: 0,
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 500,
          color: '#142032',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }
      : {
          fontSize: '16px',
          lineHeight: '22px',
        }

  const cardTitle: SxStyleProp = {
    ...styles.title,
    ...titleAttributes,
  }

  return cardTitle
}

const cardDescription = (containerType: string) => {
  if (containerType === 'mobile') {
    const mobileDescription: SxStyleProp = {
      ...styles.description,
      ml: '0px',
      mt: '4px',
      fontSize: '13px',
      lineHeight: '18px',
      color: '#4A596B',
      overflowWrap: 'break-word',
      wordBreak: 'break-word',
    }
    return mobileDescription
  }

  if (containerType === 'dropdown') {
    const dropdownDescription: SxStyleProp = {
      ...styles.description,
      ml: 0,
      mt: '2px',
      fontSize: '12px',
      lineHeight: '16px',
      color: '#4A596B',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
    }
    return dropdownDescription
  }

  return styles.description
}

export { cardContainer, cardTitle, cardDescription, titleContainer }
