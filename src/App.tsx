import React from 'react'
import { WindowsBar } from './windowsBar/WindowsBar'
import '@react95/icons/icons.css'
import {ThemeProvider } from '@react95/core'

import { Progman16} from '@react95/icons'

import themes from '@react95/core/esm/ThemeProvider/themes'
import styled from 'styled-components'

const FullPageDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${(props) => (props as any).borderLight};
`

export const App: React.FC = () => {
  console.log(themes.colors)
  console.log(themes.azureOrange.colors)
  return (
    <>
    
      <ThemeProvider >
        
        <FullPageDiv{...{ borderLight: themes.bee.colors.borderLighter}}>
        <a href="https://movietrivia.ryantatecodes.com">
        <Progman16 variant="32x32_1" />
        </a>
        
        
        <WindowsBar />
        </FullPageDiv>
      </ThemeProvider>
     
    </>
  )
}
