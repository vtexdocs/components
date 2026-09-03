import { useContext, useState, type ChangeEvent } from 'react'
import { Box, Text } from '@vtex/brand-ui'

import Tooltip from 'components/tooltip'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import styles from './styles'

export type InsertAccountNameProps = {
  id: string
}

const InsertAccountName = ({ id }: InsertAccountNameProps) => {
  const { locale } = useContext(LibraryContext)
  const [accountName, setAccountName] = useState('')
  const [showError, setShowError] = useState(false)
  const [hovered, setHovered] = useState(false)

  const handleNavigate = () => {
    if (!accountName.trim()) {
      setShowError(true)
      return
    }
    window.open(
      `https://${accountName.trim()}.myvtex.com/admin/docs/${id}`,
      '_blank'
    )
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAccountName(e.target.value)
    if (showError) setShowError(false)
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <input
          placeholder={
            messages[locale]['insert_account_name.placeholder'] ||
            'Account name'
          }
          value={accountName}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleNavigate()
          }}
          style={{
            ...styles.input,
            ...(showError ? styles.inputError : {}),
          }}
        />
        <Tooltip
          label={
            messages[locale]['insert_account_name.tooltip'] ||
            'View documentation page on VTEX Admin'
          }
          placement="top"
        >
          <button
            onClick={handleNavigate}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              ...styles.button,
              ...(hovered ? styles.buttonHover : {}),
            }}
          >
            {messages[locale]['insert_account_name.button'] ||
              'Go to documentation'}
          </button>
        </Tooltip>
      </Box>
      {showError && (
        <Text sx={styles.errorText}>
          {messages[locale]['insert_account_name.error'] ||
            'Account name is required'}
        </Text>
      )}
    </Box>
  )
}

export default InsertAccountName
