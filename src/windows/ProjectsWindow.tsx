import React, { useState } from 'react'
import { Window, WindowHeader, Button, Bar, Toolbar, Cutout } from 'react95'
import {
  CustomMoveable,
  MoveableWrapperWindow,
} from '../moveable/CustomMoveable'
import styled from 'styled-components'

interface Props {
  setDisplayProjects: React.Dispatch<React.SetStateAction<boolean>>
}

export const ProjectsWindow: React.FC<Props> = ({ setDisplayProjects }) => {
  const selector = '.projects'
  const [displayMovieTrivia, setDisplayMovieTrivia] = useState(true)
  const [displayRyanTateCodes, setDisplayRyanTateCodes] = useState(false)

  return (
    <MoveableWrapperWindow>
      <Window resizable={false} className="projects">
        <WindowHeader className="window-header">
          <span>Projects</span>
          <Button onClick={() => setDisplayProjects(false)}>
            <span className="close-icon">X</span>
          </Button>
        </WindowHeader>
        <Toolbar>
          <Button
            active={displayMovieTrivia}
            variant="menu"
            size="sm"
            onClick={() => {
              setDisplayMovieTrivia(true)
              setDisplayRyanTateCodes(false)
            }}
          >
            Movie Trivia
          </Button>
          <Bar size={35} />
          <Button
            active={displayRyanTateCodes}
            variant="menu"
            size="sm"
            onClick={() => {
              setDisplayRyanTateCodes(true)
              setDisplayMovieTrivia(false)
            }}
          >
            Ryan Tate Codes
          </Button>
          <Bar size={35} />
        </Toolbar>

        <Cutout style={{ width: '600px', height: '300px' }}>
          {displayMovieTrivia && (
            <WrapperGrid>
              <ColumnGrid1>
                <img
                  src={require('../assets/screenshotMovieTrivia.png')}
                  alt="Screenshot of http://movietrivia.ryantatecodes.com"
                  width="300"
                  onClick={() => {
                    window.open(
                      'http://movietrivia.ryantatecodes.com',
                      '_blank',
                    )
                  }}
                  style={{
                    float: 'left',
                    paddingLeft: '5px',
                    paddingRight: '5px',
                  }}
                />
              </ColumnGrid1>
              <ColumnGrid2>
                <h1
                  style={{
                    textAlign: 'center',
                  }}
                >
                  🍿 Movie Trivia 🍿
                </h1>
                <p>
                  I wanted to create an app that utilizes OMDb API to create a
                  free choice movie quiz generator. OMDb API provides movie
                  related information through a RESTful web service. There was
                  not a quiz website that allowed users to choose movies to test
                  their movie knowledge, so I created one.{' '}
                </p>
              </ColumnGrid2>
            </WrapperGrid>
          )}
          {displayRyanTateCodes && (
            <WrapperGrid>
              <ColumnGrid1>
                <img
                  src={require('../assets/screenshotRTC.png')}
                  alt="Screenshot of http://ryantatecodes.com"
                  width="300"
                  style={{
                    float: 'left',
                    paddingLeft: '5px',
                    paddingRight: '5px',
                  }}
                />
              </ColumnGrid1>
              <ColumnGrid2>
                <h1
                  style={{
                    textAlign: 'center',
                  }}
                >
                  Ryan Tate Codes
                </h1>
                <p>
                  I wanted to create a fun site to showcase my projects and
                  progress.{' '}
                </p>
              </ColumnGrid2>
            </WrapperGrid>
          )}
        </Cutout>
      </Window>
      <CustomMoveable selector={selector} selectorWrapper="iconMoveable" />
    </MoveableWrapperWindow>
  )
}

const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`
const ColumnGrid1 = styled.div`
  grid-column: 1;
  grid-row: 1;
`
const ColumnGrid2 = styled.div`
  grid-column: 2;
  grid-row: 1;
`
