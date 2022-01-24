import React, { useState } from 'react'
import styled from 'styled-components'
import { Window, WindowHeader, Button, Desktop, Select } from 'react95'
import Moveable from 'react-moveable'
import { useEffect } from 'react'
import { Themes } from '../theme/Theme'
import './ChangeThemeWindow.css'

interface Props {
  theme: any
  setTheme: React.Dispatch<any>
  setDisplayChangeTheme: React.Dispatch<React.SetStateAction<boolean>>
}

const Wrapper = styled.div`
  padding: 5rem;
  background: ___CSS_0___;
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;

    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ___CSS_1___;
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    width: 300x;
    min-height: 425px;
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`
const initialFrame = {
  translate: [0, 0],
}

export const ChangeThemeWindow: React.FC<Props> = ({
  theme,
  setTheme,
  setDisplayChangeTheme,
}) => {
  const [frame, setFrame] = useState(initialFrame.translate)
  const [shouldDisplay, setShouldDisplay] = useState(false)
  const waitUntilElementExists = () => {
    const window = document.querySelector('.window')

    if (window) {
      setShouldDisplay(true)
      return
    }

    setTimeout(() => waitUntilElementExists(), 1500)
  }
  useEffect(() => waitUntilElementExists(), [waitUntilElementExists])

  return (
    <>
      <Wrapper>
        <Window
          resizable={false}
          className="window"
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
        {shouldDisplay ? (
          <Moveable className='changeThemeWindow'
            target={document.querySelector('.window') as any}
            draggable={true}
            resizable={false}
            throttleDrag={0}
            onDragStart={({ set }) => {
              set(frame)
            }}
            onDrag={({ target, beforeTranslate }) => {
              setFrame(beforeTranslate)
              target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`
            }}
            onDragEnd={({ target, isDrag, clientX, clientY }) => {
              //console.log('onDragEnd', target, isDrag)
            }}
          />
        ) : null}
      </Wrapper>
    </>
  )
}
