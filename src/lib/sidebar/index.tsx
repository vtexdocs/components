import { useEffect, useRef, useState, useContext } from 'react'
import { Flex, Text, Box } from '@vtex/brand-ui'
import Link from 'next/link.js'

import styles from './styles'
import { iconTooltipStyle } from './functions'

import { Section } from 'utils/typings/types'
import Tooltip from 'components/tooltip'
import { updateOpenPage } from 'utils/sidebar-utils'
import SidebarSection, { SidebarSectionProps } from 'components/sidebar-section'
import { LibraryContext } from 'utils/context/libraryContext'

export interface SideBarSectionState {
  /** Array containing the name of the parents of the expanded page in the menu. */
  parentsArray?: string[]
}

/**
 * Sidebar component.
 */
const Sidebar = ({ parentsArray = [] }: SideBarSectionState) => {
  const [expandDelayStatus, setExpandDelayStatus] = useState(true)

  const context = useContext(LibraryContext)
  const {
    isEditorPreview,
    setActiveSectionName,
    activeSectionName,
    sidebarSections,
    sidebarDataMaster,
    locale
  } = context

  const sidebarSectionContent = {
    ...(Array.isArray(sidebarDataMaster)
      ? sidebarDataMaster?.find(
          (section: SidebarSectionProps) =>
            section.documentation === activeSectionName
        )
      : null),
  }

  console.log('---------------(sidebar) sidebarSectionContent.name')
  console.log(sidebarSectionContent.name[locale])

  updateOpenPage({
    parentsArray,
    context,
  })

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined = undefined
    if (sidebarSectionContent.categories?.length > 0)
      timer = setTimeout(
        () => setExpandDelayStatus && setExpandDelayStatus(false),
        5000
      )
    else setExpandDelayStatus && setExpandDelayStatus(true)

    return () => {
      timer && clearTimeout(timer)
    }
  }, [activeSectionName])

  const SideBarIcon = (sectionElement: Section) => {
    const [iconTooltip, setIconTooltip] = useState(false)
    const [tooltipLabel, setTooltipLabel] = useState(sectionElement.title)
    const titleRef = useRef<HTMLElement>()

    console.log('---------------(sidebar) titleRef.current')
    console.log(titleRef.current)

    useEffect(() => {
      const resizeObserver = new MutationObserver(function (entries) {
        const target = entries[0].target as HTMLElement
        if (target.offsetWidth < target.scrollWidth) setIconTooltip(true)
        else setIconTooltip(false)

        if (target.offsetWidth > 0) setTooltipLabel(target.innerText)
      })
      if (titleRef.current) {
        if (titleRef.current.offsetWidth < titleRef.current.scrollWidth)
          setIconTooltip(true)
        resizeObserver.observe(titleRef.current, {
          childList: true,
        })
      }
      return () => {
        resizeObserver.disconnect
      }
    }, [titleRef.current])

    return (
      <Box sx={styles.linkContainer}>
        <Tooltip
          sx={iconTooltipStyle(iconTooltip)}
          placement="right"
          label={tooltipLabel}
        >
          <Link
            href={!isEditorPreview ? sectionElement.link : '/'}
            onClick={(e) => {
              if (isEditorPreview) {
                e.preventDefault()
              }
              setActiveSectionName(sectionElement.title)
            }}
            passHref
            aria-label={sectionElement.title}
          >
            <Flex
              sx={
                activeSectionName === sectionElement.title
                  ? styles.iconBoxActive
                  : styles.iconBox
              }
            >
              <sectionElement.Icon
                sx={
                  activeSectionName === sectionElement.title
                    ? styles.iconActive
                    : styles.icon
                }
              />
              <Text
                className={expandDelayStatus ? 'iconDescriptionExpanded' : ''}
                ref={titleRef}
                sx={styles.iconTitle}
              >
                {sectionElement.title}
              </Text>
            </Flex>
          </Link>
        </Tooltip>
      </Box>
    )
  }

  return (
    <Flex sx={styles.sidebar}>
      <Flex
        className={expandDelayStatus ? 'iconContainerExpanded' : ''}
        sx={styles.sidebarIcons}
      >
        {sidebarSections.map((section, id) => {
          return (
            <>
              {id > 0 && (
                <Box sx={styles.sectionDivider} key={`${id}-divider`}>
                  <hr />
                </Box>
              )}
              <Flex sx={styles.sidebarIconsContainer} key={id}>
                {section.map((element) => (
                  <SideBarIcon
                    {...element}
                    key={`sidebar-icon-${element.title}`}
                  />
                ))}
              </Flex>
            </>
          )
        })}
      </Flex>
      {activeSectionName ? <SidebarSection {...sidebarSectionContent} /> : null}
    </Flex>
  )
}

export default Sidebar
