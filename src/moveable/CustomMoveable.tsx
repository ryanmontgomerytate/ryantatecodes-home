import Moveable from 'react-moveable'
import React, { useState, useEffect } from 'react'
import './CustomMoveable.css'
import styled from 'styled-components'

interface Props {
  selector: string
  selectorWrapper: string
}

interface Frame {
  translate: number[]
}
export const initialFrame: Frame = {
  translate: [0, 0],
}

export const CustomMoveable: React.FC<Props> = ({
  selector,
  selectorWrapper,
}) => {
  const selected = document.querySelector(selector) as any
  const [frame, setFrame] = useState(initialFrame.translate)
  const [shouldDisplay, setShouldDisplay] = useState(false)
  const waitUntilElementExists = () => {
    const querySelected = document.querySelector(selector)
    if (querySelected) {
      setShouldDisplay(true)
      return
    }
    setTimeout(() => waitUntilElementExists(), 1500)
  }
  useEffect(() => waitUntilElementExists(), [waitUntilElementExists])
  return (
    <>
      {shouldDisplay && (
        <Moveable
          className={selectorWrapper}
          target={selected}
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
        />
      )}
    </>
  )
}

export const MoveableWrapperIcon = styled.div`
  box-sizing: border-box;
  width: 36px;
  padding: 1rem;
  color: #ffffff;
`

export const MoveableWrapperWindow = styled.div`
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
`
