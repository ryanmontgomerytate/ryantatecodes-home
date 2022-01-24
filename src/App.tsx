import React from 'react'
import { Theme, Themes } from './theme/Theme'
import { WindowsBar } from './windowsBar/WindowsBar'
import { useState } from 'react'
import styled from 'styled-components'
import { ChangeThemeWindow } from './changeThemeWindow/ChangeThemeWindow'

export const App: React.FC = () => {
  const [theme, setTheme] = useState(Themes.original)
  const [displayChangeTheme, setDisplayChangeTheme] = useState(false)
  return (
    <Theme theme={theme}>
      <FullPageDiv {...{ desktopBackground: theme.desktopBackground }}>
        {displayChangeTheme ? (
          <ChangeThemeWindow theme={theme} setTheme={setTheme} setDisplayChangeTheme={setDisplayChangeTheme}/>
        ) : null}
        <WindowsBar setDisplayChangeTheme={setDisplayChangeTheme} />
      </FullPageDiv>
    </Theme>
  )
}

const FullPageDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${(props) => (props as any).desktopBackground};
`
