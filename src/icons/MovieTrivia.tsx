import React from 'react'
import {
  CustomMoveable,
  MoveableWrapperIcon,
} from '../moveable/CustomMoveable'

export const MovieTrivia: React.FC = () => {
  const selector = '.triviaIcon'
  return (
    <>
      <MoveableWrapperIcon>
        <div className="triviaIcon" style={{ color: 'white' }}>
          <img
            src={require('../assets/popcornBucket.png')}
            alt="popcorn bucket icon for movietrivia.ryantatecodes.com"
            width="50"
            onClick={() => {
              window.open('http://movietrivia.ryantatecodes.com', '_blank')
            }}
          />
          <br />
          {'Movie Trivia'}
        </div>
        <CustomMoveable selector={selector} selectorWrapper="iconMoveable" />
      </MoveableWrapperIcon>
    </>
  )
}
