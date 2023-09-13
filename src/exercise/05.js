// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({size, styleProp, children}) => {
  return (
    <div
      className={'box ' + (size ? `box--${size}` : '')}
      style={{...styleProp, fontStyle: 'italic'}}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" styleProp={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" styleProp={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" styleProp={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box classNameProp="box"> sizeless box</Box>
    </div>
  )
}

export default App
