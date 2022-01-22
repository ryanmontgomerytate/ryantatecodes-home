import React from 'react'
import {
  AppBar,
  Toolbar,
  TextField,
  Button,
  List,
  ListItem,
  Divider,
} from 'react95'
import logoIMG from 'react95/dist/images/logo.png'
import { ChangeThemeWindow } from '../changeThemeWindow/ChangeThemeWindow'
import './WindowsBar.css'

export const WindowsBar: React.FC = () => {
  const [open, setOpen] = React.useState(false)

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
              <ListItem onClick={(<ChangeThemeWindow />)}>
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

        <TextField placeholder="Search..." width={150} />
      </Toolbar>
    </AppBar>
  )
}
