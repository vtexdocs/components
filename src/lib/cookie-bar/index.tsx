import React, { ReactNode, useContext } from 'react'
import CookieConsent from 'react-cookie-consent'
import styles from './styles'
import { Flex, SxStyleProp, Text } from '@vtex/brand-ui'
import { messages } from 'utils/get-message'
import { LibraryContext } from 'utils/context/libraryContext'
import aa from 'search-insights'

interface Props {
  onAccept: () => void
}

interface ButtonProps {
  children: ReactNode[]
  style: SxStyleProp
}

const Button = ({ children, style, ...props }: ButtonProps) => {
  return (
    <Flex sx={style} {...props}>
      {children}
    </Flex>
  )
}

const CookieBar = ({ onAccept }: Props) => {
  const { locale } = useContext(LibraryContext)

  return (
    <CookieConsent
      enableDeclineButton
      buttonStyle={styles.acceptButton}
      declineButtonStyle={styles.declineButton}
      style={styles.bar}
      onAccept={() => {
        aa('init', {
          partial: true,
          useCookie: true,
        })
        onAccept()
      }}
      declineButtonText={messages[locale]['cookie_bar.decline']}
      buttonText={messages[locale]['cookie_bar.accept']}
      ButtonComponent={Button}
      customButtonWrapperAttributes={{ style: styles.buttonContainer }}
      customContentAttributes={{ style: styles.barContent }}
    >
      <Text sx={styles.title}>{messages[locale]['cookie_bar.title']}</Text>
      <Text>{messages[locale]['cookie_bar.description']}</Text>
    </CookieConsent>
  )
}

export default CookieBar
