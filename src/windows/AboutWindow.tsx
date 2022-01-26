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
  const selector = '.windowProjects'

  return (
    <>
      <MoveableWrapperWindow>
        <Window resizable={false} className="windowProjects">
          <WindowHeader className="window-header">
            <span>About Ryan</span>
            <Button onClick={() => setDisplayAbout(false)}>
              <span className="close-icon">X</span>
            </Button>
          </WindowHeader>
          <WindowContent>
            <Cutout
              style={{ padding: '1rem', background: 'white', width: '300px' }}
            >
              <Fieldset variant="flat" label="Contact">
                Some content here
                <span role="img" aria-label="😍">
                  😍
                </span>
              </Fieldset>
              <br />
              <Fieldset variant="flat" label="Linkdin">
                www.linkedin.com/in/ryanmontgomerytate
                <span role="img" aria-label="😍">
                  😍
                </span>
              </Fieldset>
            </Cutout>
          </WindowContent>
        </Window>
        <CustomMoveable selector={selector} selectorWrapper="iconMoveable" />
      </MoveableWrapperWindow>
    </>
  )
}
