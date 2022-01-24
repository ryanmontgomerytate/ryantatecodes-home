import { Progman16 } from '@react95/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import Moveable from 'react-moveable'
import './ProjectIcon.css'

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
export const ProjectIcons: React.FC = () => {
  const [frame, setFrame] = useState(initialFrame.translate)
  return (
    <>
      <Wrapper>
        <div className="projectIconBox">
          <a href="https://movietrivia.ryantatecodes.com">
            <Progman16 variant="32x32_1" />
          </a>
          <br />
          {'Movie Trivia'}
        </div>

        <Moveable
          className="iconMoveable"
          target={document.querySelector('.projectIconBox') as any}
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
      </Wrapper>
    </>
  )
}
