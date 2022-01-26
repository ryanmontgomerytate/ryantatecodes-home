import React from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  Panel,
} from 'react95'
import logoIMG from 'react95/dist/images/logo.png'

import './WindowsBar.css'
import { useEffect, useState } from 'react'
import { Appwiz1500, Awfxcg321303, Desk100 } from '@react95/icons'

interface Props {
  setDisplayChangeTheme: React.Dispatch<React.SetStateAction<boolean>>
  setDisplayProjects: React.Dispatch<React.SetStateAction<boolean>>
  setDisplayAbout: React.Dispatch<React.SetStateAction<boolean>>
}

export const WindowsBar: React.FC<Props> = ({
  setDisplayChangeTheme,
  setDisplayProjects,
  setDisplayAbout,
}) => {
  const [open, setOpen] = useState(false)
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  const updateClock = () => setTime(new Date().toLocaleTimeString())

  useEffect(() => {
    setInterval(() => updateClock(), 1000)
    return
  }, [])

  return (
    <AppBar className={'windowsBarCSS'} otherProps={{ fixed: true }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold' }}
          >
            <img
              src={logoIMG}
              alt="react95 logo"
              style={{ height: '20px', marginRight: 4 }}
            />
            Start
          </Button>
          {open && (
            <List
              style={{
                position: 'absolute',
                left: '0',
                bottom: '100%',
              }}
              onClick={() => setOpen(false)}
            >
              <ListItem onClick={() => setDisplayProjects(true)}>
                <span>
                  <Appwiz1500 variant="32x32_4" />
                </span>
                Projects
              </ListItem>
              <ListItem onClick={() => setDisplayChangeTheme(true)}>
                <span>
                  <Desk100 variant="32x32_4" />
                </span>
                Change Desktop Theme
              </ListItem>
              <ListItem onClick={() => setDisplayAbout(true)}>
                <span>
                  <Awfxcg321303 variant="32x32_4" />
                </span>
                About Ryan
              </ListItem>
            </List>
          )}
        </div>

        <Panel
          variant="well"
          style={{
            padding: '0.1rem 0.25rem',
          }}
        >
          {time}
        </Panel>
      </Toolbar>
    </AppBar>
  )
}
