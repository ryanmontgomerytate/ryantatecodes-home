import React from 'react'
import { Window, WindowHeader, Button, Desktop, Select } from 'react95'
import { Themes } from '../theme/Theme'
import {
  CustomMoveable,
  MoveableWrapperWindow,
} from '../moveable/CustomMoveable'

interface Props {
  theme: any
  setTheme: React.Dispatch<any>
  setDisplayChangeTheme: React.Dispatch<React.SetStateAction<boolean>>
}

export const ChangeThemeWindow: React.FC<Props> = ({
  theme,
  setTheme,
  setDisplayChangeTheme,
}) => {
  const selector = '.theme'

  return (
    <MoveableWrapperWindow>
      <Window
        resizable={false}
        className="theme"
        style={{ width: '400px', minHeight: '325px' }}
      >
        <WindowHeader className="window-header">
          <span>Change Desktop Theme</span>
          <Button onClick={() => setDisplayChangeTheme(false)}>
            <span className="close-icon">X</span>
          </Button>
        </WindowHeader>
        <div style={{ textAlign: 'center' }}>
          The current theme is {theme.name}.
        </div>
        <Desktop
          backgroundStyles={{ background: theme.desktopBackground }}
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
        />
        <br />
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
        >
          <Select
            menuMaxHeight={160}
            width={300}
            onChange={(selected: any) => setTheme(selected.target.value)}
            options={Object.keys(Themes).map((key) => {
              return { label: key, value: (Themes as any)[key] }
            })}
          />
        </div>
        <br />
      </Window>
      <CustomMoveable selector={selector} selectorWrapper="iconMoveable" />
    </MoveableWrapperWindow>
  )
}
