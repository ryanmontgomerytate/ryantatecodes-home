import React from 'react'
import {
  CustomMoveable,
  MoveableWrapperIcon,
} from '../moveable/CustomMoveable'

export const GitHubIcon: React.FC = () => {
  const selector = '.gitHubIcon'
  return (
    <>
      <MoveableWrapperIcon>
        <div className="gitHubIcon" style={{ color: 'white' }}>
          <img
            src={require('../assets/GitHub-Mark-Light-32px.png')}
            alt="GitHub icon for github.com/ryanmontgomerytate/ryanmontgomerytate"
            width="50"
            onClick={() => {
              window.open(
                'https://github.com/ryanmontgomerytate/ryanmontgomerytate',
                '_blank',
              )
            }}
          />
          <br />
          {"Ryan's GitHub"}
        </div>
        
          <CustomMoveable
            selector={selector}
            selectorWrapper='iconMoveable'
          />
        
      </MoveableWrapperIcon>
    </>
  )
}
