import { SxStyleProp } from '@vtex/brand-ui'

const outerContainer: SxStyleProp = {
  cursor: 'initial',
  top: 'calc(5rem - 1px)',
  right: 0,
  position: 'absolute',
  filter: 'drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.1))',
  borderRadius: '0px 0px 8px 8px',
  border: '1px solid #E7E9EE',
  background: 'white',
  padding: '8px',
  width: '680px',
  maxWidth: 'calc(100vw - 32px)',
  maxHeight: 'calc(100vh - 5rem)',
  zIndex: 10,
}

const innerContainer: SxStyleProp = {
  overflowY: 'auto',
  overscrollBehavior: 'contain',
  maxHeight: 'calc(100vh - 5rem - 16px)',
  scrollbarWidth: 'thin',
  scrollbarColor: 'white white',

  '::-webkit-scrollbar': {
    width: '5px',
  },

  '::-webkit-scrollbar-thumb': {
    borderRadius: '100px',
    background: 'white',
  },

  ':hover': {
    scrollbarColor: '#CCCED8 white',

    '::-webkit-scrollbar-thumb': {
      background: '#CCCED8',
    },
  },
}

const documentationContainer: SxStyleProp = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  columnGap: '4px',
  rowGap: '4px',
}

const updatesContainer: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  mt: '4px',
  pt: '4px',
  borderRadius: '0px 0px 8px 8px',
  borderTop: '1px solid #E7E9EE',
}

export default {
  documentationContainer,
  innerContainer,
  outerContainer,
  updatesContainer,
}
