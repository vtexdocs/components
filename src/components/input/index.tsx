import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { Flex } from '@vtex/brand-ui'
import CloseIcon from 'components/icons/close-icon'
import { useLocale } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'
import { IconComponent } from 'utils/typings/types'
import styles from './styles'

interface InputProps {
  value: string
  Icon?: IconComponent
  placeholder?: string
  onChange: (value: string) => void
}

const Input = ({ value, onChange, placeholder = '', Icon }: InputProps) => {
  const [inputValue, setInputValue] = useState(value ?? '')
  const inputRef = useRef<HTMLInputElement>(null)
  const locale = useLocale()
  const clearLabel = messages[locale]['search_input.clear'] || 'Clear search'

  useEffect(() => {
    if (inputValue !== value) setInputValue(value)
  }, [value])

  return (
    <Flex sx={styles.container} onClick={() => inputRef.current?.focus()}>
      {Icon && <Icon sx={styles.icon} />}
      <input
        ref={inputRef}
        style={styles.input}
        className="searchComponent"
        type="search"
        enterKeyHint="search"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        value={inputValue}
        placeholder={placeholder}
        aria-label={placeholder}
        onChange={(e) => {
          setInputValue(e.currentTarget.value)
          onChange(e.currentTarget.value)
        }}
      />
      {inputValue ? (
        <Flex
          as="button"
          type="button"
          sx={styles.clearButton}
          aria-label={clearLabel}
          title={clearLabel}
          onClick={(e: MouseEvent<HTMLElement>) => {
            e.stopPropagation()
            setInputValue('')
            onChange('')
            inputRef.current?.focus()
          }}
        >
          <CloseIcon sx={styles.clearIcon} />
        </Flex>
      ) : null}
    </Flex>
  )
}

export default Input
