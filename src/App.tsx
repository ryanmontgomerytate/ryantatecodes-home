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
  const [displayAbout, setDisplayAbout] = useState(false)

  return (
    <Theme theme={theme}>
      <FullPageDiv {...{ desktopBackground: theme.desktopBackground }}>
        <GitHubIcon />
        <MovieTrivia />
        {displayChangeTheme && (
          <ChangeThemeWindow
            theme={theme}
            setTheme={setTheme}
            setDisplayChangeTheme={setDisplayChangeTheme}
          />
        )}
        {displayProjects && (
          <ProjectsWindow setDisplayProjects={setDisplayProjects} />
        )}
        {displayAbout && <AboutWindow setDisplayAbout={setDisplayAbout} />}
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
`
