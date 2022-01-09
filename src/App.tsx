import React from 'react'
import './App.css'
import {Paper} from '@mui/material'

export const App: React.FC=() =>{
  return (
    <div className="App">
      <Paper variant="outlined" square>
      <h1>Welcome to Ryan Tate codes!</h1>
      <p>Here is where I have been honing my skills since my past job.</p>
      </Paper>
    </div>
  );
}
