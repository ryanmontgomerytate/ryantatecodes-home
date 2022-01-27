import React from 'react'
import {
  Window,
  WindowHeader,
  Button,
  WindowContent,
  Fieldset,
  Cutout,
} from 'react95'
import {
  CustomMoveable,
  MoveableWrapperWindow,
} from '../moveable/CustomMoveable'

interface Props {
  setDisplayAbout: React.Dispatch<React.SetStateAction<boolean>>
}
export const AboutWindow: React.FC<Props> = ({ setDisplayAbout }) => {
  const selector = '.about'

  return (
    <MoveableWrapperWindow>
      <Window resizable={false} className="about">
        <WindowHeader className="window-header">
          <span>About Ryan</span>
          <Button onClick={() => setDisplayAbout(false)}>
            <span className="close-icon">X</span>
          </Button>
        </WindowHeader>
        <WindowContent>
          <Cutout
            style={{ padding: '1rem', background: 'white', width: '425px' }}
          >
            <div>
              <img
                src={require('../assets/keyboardRTC.png')}
                alt="ryantatecodes.com logo"
                width="100%"
              />
              <h1>Hello world! I'm Ryan 👋 </h1>
              <br />
              <p>
                Below, you can find links to my work history & skills, my
                personal projects, and my contact information.
              </p>
              <br />
              <Fieldset variant="flat" label="Connect with me">
                <a href="linkedin.com/in/ryanmontgomerytate" target="_blank">
                  LinkedIn - linkedin.com/in/ryanmontgomerytate
                </a>
                <br />
                <a href="github.com/ryanmontgomerytate" target="_blank">
                  GitHub - github.com/ryanmontgomerytate
                </a>
                <br />
                <a href="mailto:ryanmontgomerytate@gmail.com">
                  Email - ryanmontgomerytate@gmail.com
                </a>
              </Fieldset>
            </div>
          </Cutout>
        </WindowContent>
      </Window>
      <CustomMoveable selector={selector} selectorWrapper="iconMoveable" />
    </MoveableWrapperWindow>
  )
}
