import React, { useContext, useState } from 'react'
import { Box, Button, Text, Flex, Link } from '@vtex/brand-ui'
import { messages } from 'utils/get-message'
import { getPrivacyNoticeURL, getNewsletterURL } from 'utils/get-url'
import { LibraryContext } from 'utils/context/libraryContext'
import styles from './styles'

type EmailValidationResult = 'valid' | 'invalid' | 'error'

const SubscriptionList: React.FC = () => {
  const { locale } = useContext(LibraryContext)
  const localizedMessages = messages[locale] ?? messages.en
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')

  const clearMessageAfterTimeout = () => {
    setTimeout(() => {
      setMessage('')
      setMessageType('')
    }, 3000)
  }

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessageType(type)
    setMessage(text)
    clearMessageAfterTimeout()
    if (type === 'success') setEmail('')
  }

  const checkEmail = async (email: string): Promise<EmailValidationResult> => {
    const apiKey = process.env.NEXT_PUBLIC_NEWSLETTER_API_KEY
    if (!apiKey) {
      console.error(localizedMessages['subscription_list.api_key_error'])
      return 'error'
    }

    const url = `https://mailcheck.p.rapidapi.com/?email=${encodeURIComponent(
      email
    )}`

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'mailcheck.p.rapidapi.com',
          'x-rapidapi-key': apiKey,
        },
      })

      if (!response.ok) {
        console.error(
          'Email validation failed:',
          response.status,
          response.statusText
        )
        return 'error'
      }

      const data = await response.json()
      if (typeof data.block !== 'boolean') {
        console.error('Email validation returned an unusable response:', data)
        return 'error'
      }

      return data.block ? 'invalid' : 'valid'
    } catch (error) {
      console.error(error)
      return 'error'
    }
  }

  const handleSubscribe = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showMessage('error', localizedMessages['subscription_list.invalid_email'])
      return
    }

    const validationResult = await checkEmail(email)
    if (validationResult === 'invalid') {
      showMessage('error', localizedMessages['subscription_list.invalid_email'])
      return
    }
    if (validationResult === 'error') {
      showMessage('error', localizedMessages['subscription_list.error'])
      return
    }

    const baseURL =
      'https://hooks.zapier.com/hooks/catch/11585741/2pahup2/?email='

    const browserLocale = navigator.language || 'en-US'
    const currentDate = new Date()
    const formattedDate = currentDate.toLocaleString(browserLocale, {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })

    const urlEnd = `&locale=${browserLocale}&date=${encodeURIComponent(
      formattedDate
    )}`
    const emailEncoded = encodeURIComponent(email)
    const url = baseURL + emailEncoded + urlEnd

    try {
      const response = await fetch(url, { method: 'POST' })

      if (!response.ok) {
        console.error(
          'Subscription failed:',
          response.status,
          response.statusText
        )
        showMessage('error', localizedMessages['subscription_list.error'])
        return
      }

      showMessage('success', localizedMessages['subscription_list.success'])
    } catch (error) {
      console.error('Error:', error)
      showMessage('error', localizedMessages['subscription_list.error'])
    }
  }

  return (
    <Box sx={styles.sectionContainer}>
      <Text sx={styles.title}>
        {localizedMessages['landing_page_subscription.title']}
      </Text>
      <Flex sx={styles.cardContainer}>
        <div>
          <Text sx={styles.description}>
            {
              localizedMessages['landing_page_subscription.description'].split(
                'newsletter'
              )[0]
            }
            <a
              href={getNewsletterURL(locale)}
              target="_blank"
              rel="noopener noreferrer"
            >
              newsletter
            </a>
            {
              localizedMessages['landing_page_subscription.description'].split(
                'newsletter'
              )[1]
            }
          </Text>
          <Flex sx={styles.inputContainer}>
            <Box
              as="input"
              id="email"
              type="email"
              aria-label="Email"
              placeholder="Email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              sx={styles.emailInputField}
            />
            <Button
              type="button"
              size="regular"
              onClick={handleSubscribe}
              sx={styles.button}
            >
              {localizedMessages['landing_page_newsletter.Button']}
            </Button>
          </Flex>
          <Text sx={styles.privacyText}>
            {localizedMessages['subscription_list.privacy_notice']}{' '}
            <Link
              href={getPrivacyNoticeURL(locale)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {localizedMessages['subscription_list.privacy_policy_link']}
            </Link>
          </Text>
          {message && (
            <Box
              sx={{
                ...styles.popupCard,
                backgroundColor:
                  messageType === 'success' ? '#dff1e0' : '#f8e3e3',
              }}
            >
              <Text>{message}</Text>
            </Box>
          )}
        </div>
      </Flex>
    </Box>
  )
}

export default SubscriptionList
