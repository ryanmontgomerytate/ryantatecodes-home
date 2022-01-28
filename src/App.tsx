import React, { useState } from 'react'
import { Theme, Themes } from './theme/Theme'
import { WindowsBar } from './windowsBar/WindowsBar'
import styled from 'styled-components'
import { ChangeThemeWindow } from './windows/ChangeThemeWindow'
import { MovieTrivia } from './icons/MovieTrivia'
import { GitHubIcon } from './icons/GitHubIcon'
import { ProjectsWindow } from './windows/ProjectsWindow'
import { AboutWindow } from './windows/AboutWindow'

export const App: React.FC = () => {
  const [theme, setTheme] = useState(Themes.original)
  const [displayChangeTheme, setDisplayChangeTheme] = useState(false)
  const [displayProjects, setDisplayProjects] = useState(false)
  const [displayAbout, setDisplayAbout] = useState(true)

  return (
    <Theme theme={theme}>
      <FullPageDiv {...{ desktopBackground: theme.desktopBackground }}>
        <ColumnGrid1>
          <GitHubIcon />
          <MovieTrivia />
        </ColumnGrid1>
        <ColumnGrid2>
          <WindowGrid>
          <WindowColumnGrid1> {displayAbout && <AboutWindow setDisplayAbout={setDisplayAbout} />}           </WindowColumnGrid1>
            <WindowColumnGrid2>
                          {displayProjects && (
              <ProjectsWindow setDisplayProjects={setDisplayProjects} />
            )}</WindowColumnGrid2><WindowColumnGrid3>
            
            
            
            
            
            
            {displayChangeTheme && (
              <ChangeThemeWindow
                theme={theme}
                setTheme={setTheme}
                setDisplayChangeTheme={setDisplayChangeTheme}
              />
            )}</WindowColumnGrid3>
          </WindowGrid>
        </ColumnGrid2>
        <WindowsBar
          setDisplayChangeTheme={setDisplayChangeTheme}
          setDisplayProjects={setDisplayProjects}
          setDisplayAbout={setDisplayAbout}
        />
      </FullPageDiv>
    </Theme>
  )
}

const FullPageDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${(props) => (props as any).desktopBackground};
  z-index: -3000;
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: none;
`
const ColumnGrid1 = styled.div`
  grid-column: 1;
  grid-row: 1;
`
const ColumnGrid2 = styled.div`
  grid-column: 2;
  grid-row: 1;
`
const WindowGrid = styled.div`
  display: grid;
  grid-template-columns: 6px 6px 6px;
  gap: none;
  grid-template-rows: 60px 100px 100px;
`
const WindowColumnGrid1 = styled.div`
  grid-column: 1;
  grid-row: 1;
`
const WindowColumnGrid2 = styled.div`
  grid-column: 1;
  grid-row: 2;
`
const WindowColumnGrid3 = styled.div`
  grid-column: 1;
  grid-row: 3;
`