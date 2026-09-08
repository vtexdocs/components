import {
  Fragment,
  useEffect,
  useMemo,
  useRef,
  useState,
  useContext,
} from 'react'
import { Flex, Text, Box } from '@vtex/brand-ui'
import Link from 'next/link.js'

import styles from './styles'
import { iconTooltipStyle } from './functions'

import { Section } from 'utils/typings/types'
import Tooltip from 'components/tooltip'
import { updateOpenPage, getSectionLabel } from 'utils/sidebar-utils'
import SidebarSection, { SidebarSectionProps } from 'components/sidebar-section'
import { LibraryContext } from 'utils/context/libraryContext'

export interface SideBarSectionState {
  /** Array containing the name of the parents of the expanded page in the menu. */
  parentsArray?: string[]
}

interface SideBarIconProps extends Section {
  expandDelayStatus: boolean
  isEditorPreview: boolean
  activeSectionName: string
  setActiveSectionName: (id: string) => void
}

const SideBarIcon = ({
  expandDelayStatus,
  isEditorPreview,
  activeSectionName,
  setActiveSectionName,
  ...sectionElement
}: SideBarIconProps) => {
  const [iconTooltip, setIconTooltip] = useState(false)
  const [tooltipLabel, setTooltipLabel] = useState(sectionElement.title)
  const titleRef = useRef<HTMLElement>()

  useEffect(() => {
    setTooltipLabel(sectionElement.title)
  }, [sectionElement.title])

  useEffect(() => {
    const target = titleRef.current
    if (!target) return

    const updateTooltip = () => {
      setIconTooltip(target.offsetWidth < target.scrollWidth)
      if (target.offsetWidth > 0) setTooltipLabel(target.innerText)
    }

    updateTooltip()
    const resizeObserver = new MutationObserver(updateTooltip)
    resizeObserver.observe(target, {
      childList: true,
      characterData: true,
      subtree: true,
    })
    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <Box sx={styles.linkContainer}>
      <Tooltip
        sx={iconTooltipStyle(iconTooltip)}
        placement="right"
        label={tooltipLabel}
      >
        <Link
          href={!isEditorPreview ? sectionElement.link : '/'}
          target={sectionElement?.isExternalLink == true ? '_blank' : '_self'}
          onClick={(e) => {
            if (isEditorPreview) {
              e.preventDefault()
            }
            setActiveSectionName(sectionElement.id)
          }}
          passHref
          aria-label={sectionElement.title}
        >
          <Flex
            sx={
              activeSectionName === sectionElement.id
                ? styles.iconBoxActive
                : styles.iconBox
            }
          >
            <sectionElement.Icon
              sx={
                activeSectionName === sectionElement.id
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
    locale,
  } = context

  const sidebarSectionContent = useMemo(() => {
    if (!Array.isArray(sidebarDataMaster)) return undefined
    return sidebarDataMaster.find(
      (section: SidebarSectionProps) =>
        section.documentation === activeSectionName
    ) as SidebarSectionProps | undefined
  }, [sidebarDataMaster, activeSectionName])

  updateOpenPage({
    parentsArray,
    context,
  })

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined = undefined
    if (sidebarSectionContent?.categories?.length)
      timer = setTimeout(() => setExpandDelayStatus(false), 5000)
    else setExpandDelayStatus(true)

    return () => {
      timer && clearTimeout(timer)
    }
  }, [activeSectionName, sidebarSectionContent?.categories?.length])

  return (
    <Flex sx={styles.sidebar}>
      <Flex
        className={expandDelayStatus ? 'iconContainerExpanded' : ''}
        sx={styles.sidebarIcons}
      >
        {sidebarSections.map((section, id) => (
          <Fragment key={id}>
            {id > 0 && (
              <Box sx={styles.sectionDivider}>
                <hr />
              </Box>
            )}
            <Flex sx={styles.sidebarIconsContainer}>
              {section.map((element) => {
                const title = getSectionLabel(
                  element,
                  sidebarDataMaster,
                  locale
                )
                return (
                  <SideBarIcon
                    {...element}
                    title={title}
                    key={`sidebar-icon-${element.id}`}
                    expandDelayStatus={expandDelayStatus}
                    isEditorPreview={isEditorPreview}
                    activeSectionName={activeSectionName}
                    setActiveSectionName={setActiveSectionName}
                  />
                )
              })}
            </Flex>
          </Fragment>
        ))}
      </Flex>
      {activeSectionName && sidebarSectionContent ? (
        <SidebarSection {...sidebarSectionContent} />
      ) : null}
    </Flex>
  )
}

export default Sidebar
