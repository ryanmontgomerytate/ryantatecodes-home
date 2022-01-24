import React from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  Divider,
  Panel,
} from 'react95'
import logoIMG from 'react95/dist/images/logo.png'

import './WindowsBar.css'
import { useEffect, useState } from 'react'

interface Props {
  setDisplayChangeTheme: React.Dispatch<React.SetStateAction<boolean>>
}

export const WindowsBar: React.FC<Props> = ({ setDisplayChangeTheme }) => {
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
              <ListItem>
                <span role="img" aria-label="👨‍💻">
                  👨‍💻
                </span>
                Profile
              </ListItem>
              <ListItem onClick={() => setDisplayChangeTheme(true)}>
                <span role="img" aria-label="🪄">
                  🪄
                </span>
                Change Desktop Theme
              </ListItem>
              <ListItem>
                <span role="img" aria-label="📁">
                  📁
                </span>
                My account
              </ListItem>
              <Divider />
              <ListItem disabled>
                <span role="img" aria-label="🔙">
                  🔙
                </span>
                Logout
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
