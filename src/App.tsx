import React from 'react'
import { Theme, Themes } from './theme/Theme'
import { WindowsBar } from './windowsBar/WindowsBar'
import { useState } from 'react'
import { Button } from 'react95'
import styled from 'styled-components'
import { ChangeThemeWindow } from './changeThemeWindow/ChangeThemeWindow'

export const App: React.FC = () => {
  const [theme, setTheme] = useState(Themes.original)
  return (
    <Theme theme={theme}>
      <FullPageDiv {...{ desktopBackground: theme.desktopBackground }}>
        {Object.keys(Themes).map((key) => (
          <Button onClick={() => setTheme((Themes as any)[key])}>{key}</Button>
        ))}
        <ChangeThemeWindow />
        <WindowsBar />
      </FullPageDiv>
    </Theme>
  )
}

const FullPageDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${(props) => (props as any).desktopBackground};
`
